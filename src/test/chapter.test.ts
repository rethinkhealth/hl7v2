import { Chapter } from "../chapter";

describe("Chapter", () => {
  it("should throw an error if the chapter is not found", () => {
    // GIVEN
    const randomName = "RANDOM NAME 99999";
    // THEN
    expect(() => new Chapter(randomName)).toThrowError(
      `Chapter ${randomName} not found`
    );
  });
});
