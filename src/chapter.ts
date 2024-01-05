import chapters from "./tables/chapters.json";

/**
 * HL7v2 is a standard for exchanging healthcare information between different
 * computer systems. It is a messaging standard that defines the structure and
 * format of the messages exchanged between healthcare systems.
 *
 * HL7v2 is organized into chapters, each of which covers a different aspect of
 * the messaging standard. The chapters describe the various message types, the
 * segments that make up those messages, and the data types used within those
 * segments.
 *
 * There are 22 chapters in HL7v2, covering topics such as patient
 * identification, orders and results, clinical documents, and financial
 * transactions. Each chapter provides a detailed specification of the messages
 * and data elements used for a particular type of healthcare information
 * exchange.
 */
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
        chapter.messages.find((m) =>
          m.code.includes(code) && event !== ""
            ? m.events.includes(event)
            : true,
        )
      ) {
        return new Chapter(keys[i]);
      }
    }
  }
}
