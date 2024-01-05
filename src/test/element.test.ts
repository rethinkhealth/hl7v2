import { DefaultDelimiters } from "../delimiters";
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

  it("should return string if no delimiter provided", () => {
    // Given
    const value = "Bond^James^^007";
    const sequence = "PID.5";

    // When
    const element = new Element(value, sequence);

    // Then
    expect(element.sequence).toEqual(sequence);
    expect(element.value).toEqual(value);
  });

  it.each([
    ["Bond", "1"],
    ["James", "2"],
    ["", "3"],
    ["007", "4"],
  ])(
    "should return component %s at index %",
    (expectedValue, expectedIndex) => {
      // Given
      const value = "Bond^James^^007";
      const sequence = "PID.5";

      // When
      const element = new Element(value, sequence, {
        delimiters: DefaultDelimiters,
      });

      // Then
      expect(element.sequence).toEqual("PID.5");
      expect(element.value.length).toEqual(4);
      const component = (element.value as IElement[]).find(
        (a) => a.sequence === expectedIndex,
      );
      expect(component!.value).toEqual(expectedValue);
    },
  );

  it("should return repeated values if repeated separator", () => {
    const value =
      "(919)007-0007^^^^^919^0070007~(777)707-0707^^CP^^^777^7070707~^NET^X.400^007@BritishSecretService.com";
    const sequence = "PID.5.12";

    // When
    const element = new Element(value, sequence, {
      delimiters: DefaultDelimiters,
    });

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
    const sequence = "10";

    // When
    const element = new Element(value, sequence, {
      delimiters: DefaultDelimiters,
    });

    // Then
    expect(element.toJson()).toMatchSnapshot();
  });

  it("should return a structured PID.5", () => {
    const value = "Somai^Melek^^^^^B";
    const sequence = "5"; // PID.5

    // When
    const element = new Element(value, sequence, {
      delimiters: DefaultDelimiters,
    });

    // Then
    expect(element.toJson()).toEqual({
      "1": "Somai",
      "2": "Melek",
      "3": "",
      "4": "",
      "5": "",
      "6": "",
      "7": "B",
    });
  });
});
