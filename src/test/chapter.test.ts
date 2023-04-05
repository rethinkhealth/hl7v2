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

  it("should return the correct chapter", () => {
    // GIVEN
    const chapterName = "Patient Administration";
    // WHEN
    const chapter = new Chapter(chapterName);
    // THEN
    expect(chapter.id).toBe(3);
    expect(chapter.name).toBe(chapterName);
    expect(chapter.description).toContain(
      "The Patient Administration transaction set provides"
    );
  });

  it("should return the correct chapter by id", () => {
    // GIVEN
    const chapterId = 4;
    // WHEN
    const chapter = Chapter.findChapterById(chapterId);
    // THEN
    expect(chapter).toBeDefined();
    expect(chapter?.id).toBe(chapterId);
    expect(chapter?.name).toBe("Order Entry");
    expect(chapter?.description).toContain(
      "The Order Entry transaction set provides for the transmission of orders"
    );
  });

  it.each([
    // ["ACK", "Patient Administration"],
    ["ADT_A04", "Patient Administration"],
  ])('should return the correct chapter by event "%s"', (message, expected) => {
    // WHEN
    const chapter = Chapter.findChapterByEvent(message);
    // THEN
    expect(chapter).toBeDefined();
    expect(chapter?.id).toBe(3);
    expect(chapter?.name).toBe(expected);
  });
});
