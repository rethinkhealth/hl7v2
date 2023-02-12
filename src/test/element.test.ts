import { Element, IElement } from "../element";

describe("Element", () => {
  it("should return the default value if simple string", () => {
    // Given
    const value = "this is a value";
    const sequence = "PID.1";

    // When
    const element = new Element(value, sequence);

    // Then
    expect(element.value).toBe(value);
    expect(element.sequence).toBe(sequence);
  });

  it("should return components value if component separator exists", () => {
    // Given
    const value = "Bond^James^^007";
    const sequence = "PID.5";

    // When
    const element = new Element(value, sequence);

    // Then
    expect(element.sequence).toEqual("PID.5");
    expect(element.value.length).toEqual(4);
    expect((element.value as IElement[])[0].value).toEqual("Bond");
    expect((element.value as IElement[])[0].sequence).toEqual("PID.5.1");
  });

  it("should return repeated values if repeated separator", () => {
    const value =
      "(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com";
    const sequence = "PID.5.12";

    // When
    const element = new Element(value, sequence);

    // Then
    expect(element.sequence).toEqual("PID.5.12");
    expect(element.value.length).toEqual(3);
    expect(element.value).toMatchSnapshot();
  });
});

describe("Element JSON formatting", () => {
  it("should return simple value", () => {
    const value = "simple.value.com";
    const sequence = "PID.5.10";

    // When
    const element = new Element(value, sequence);

    // Then
    expect(element.toJson()).toEqual(value);
  });

  it("should return nested object for composed element", () => {
    const value =
      "(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com";
    const sequence = "PID.5.10";

    // When
    const element = new Element(value, sequence);

    // Then
    expect(element.toJson()).toEqual({
      "PID.5.10.1": {
        "PID.5.10.1.1": "(919)007-0007",
        "PID.5.10.1.2": "",
        "PID.5.10.1.3": "",
        "PID.5.10.1.4": "",
        "PID.5.10.1.5": "",
        "PID.5.10.1.6": "919",
        "PID.5.10.1.7": "0070007",
      },
      "PID.5.10.2": {
        "PID.5.10.2.1": "(777)707-0707",
        "PID.5.10.2.2": "",
        "PID.5.10.2.3": "CP",
        "PID.5.10.2.4": "",
        "PID.5.10.2.5": "",
        "PID.5.10.2.6": "777",
        "PID.5.10.2.7": "7070707",
      },
      "PID.5.10.3": {
        "PID.5.10.3.1": "",
        "PID.5.10.3.2": "NET",
        "PID.5.10.3.3": "X.400",
        "PID.5.10.3.4": "007@BritishSecretService.com",
      },
    });
  });
});
