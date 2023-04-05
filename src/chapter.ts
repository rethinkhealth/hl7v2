import chapters from "./tables/chapters.json";

export class Chapter {
  id: number;
  name: string;
  description: string;
  constructor(name: string) {
    // Check if the chapter exists
    if (!Object.keys(Chapter).includes(name))
      throw new Error(`Chapter ${name} not found`);
    // Retrieve the chapter
    const chapter = chapters[name as keyof typeof chapters];

    // Set the properties
    this.id = chapter.metadata.number;
    this.name = name;
    this.description = chapter.metadata.description;
  }
}
