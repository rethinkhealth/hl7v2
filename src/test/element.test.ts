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
    expect(element.toJson()).toMatchSnapshot();
  });
});
