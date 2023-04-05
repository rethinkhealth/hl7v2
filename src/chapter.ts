import chapters from "./tables/chapters.json";

export class Chapter {
  id: number;
  name: string;
  description: string;
  constructor(name: string) {
    // Check if the chapter exists
    if (!Object.keys(chapters).includes(name))
      throw new Error(`Chapter ${name} not found`);
    // Retrieve the chapter
    const chapter = chapters[name as keyof typeof chapters];

    // Set the properties
    this.id = chapter.metadata.number;
    this.name = name;
    this.description = chapter.metadata.description;
  }

  public static findChapterById(id: number): Chapter | undefined {
    const keys = Object.keys(chapters);
    for (let i = 0; i < keys.length; i++) {
      const chapter = chapters[keys[i] as keyof typeof chapters];
      if (chapter.metadata.number === id) {
        return new Chapter(keys[i]);
      }
    }
  }

  public static findChapterByEvent(message: string): Chapter | undefined {
    const code = message.split("_")[0];
    const event = message.split("_")[1];

    const keys = Object.keys(chapters);
    for (let i = 0; i < keys.length; i++) {
      const chapter = chapters[keys[i] as keyof typeof chapters];
      if (
        chapter.events.find((e) =>
          e.code.includes(code) && event !== ""
            ? e.events.includes(event)
            : true
        )
      ) {
        return new Chapter(keys[i]);
      }
    }
  }
}
