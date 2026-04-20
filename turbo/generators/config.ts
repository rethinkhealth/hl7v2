import type { PlopTypes } from "@turbo/gen";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator("package", {
    description: "Create a new package with standard configuration",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Package name (without @glion/ prefix):",
        validate: (input: string) => {
          if (!input) {
            return "Package name is required";
          }
          if (!/^[a-z0-9-]+$/.test(input)) {
            return "Package name must be lowercase with hyphens only";
          }
          return true;
        },
      },
      {
        type: "input",
        name: "description",
        message: "Package description:",
        validate: (input: string) => {
          if (!input) {
            return "Description is required";
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/{{ name }}/package.json",
        templateFile: "templates/package.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/tsconfig.json",
        templateFile: "templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/tsup.config.ts",
        templateFile: "templates/tsup.config.ts.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/vitest.config.ts",
        templateFile: "templates/vitest.config.ts.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/src/index.ts",
        templateFile: "templates/src/index.ts.hbs",
      },
      {
        type: "add",
        path: "packages/{{ name }}/test/index.test.ts",
        templateFile: "templates/test/index.test.ts.hbs",
      },
    ],
  });
}
