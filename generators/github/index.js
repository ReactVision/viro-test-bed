/**
 * Github Generator
 *
 * See https://plopjs.com for more.
 */

const type = "github";

const config = {
  description: "Create a new GitHub test",
  prompts: [
    {
      type: "number",
      name: "issueNumber",
      message: "Please enter the number of the GitHub issue",
      validate: (val) => !isNaN(Number.parseInt(val)),
    },
  ],
  actions() {
    return [
      {
        type: "add",
        path: "./src/screens/github_issues/Issue{{issueNumber}}.tsx",
        templateFile: `generators/${type}/templates/index.tsx.hbs`,
      },
      {
        type: "append",
        path: "./App.tsx",
        pattern: "// PLOP GITHB ISSUE IMPORT",
        template: `import Issue{{issueNumber}} from "./src/screens/github_issues/Issue{{issueNumber}}";`,
      },
      {
        type: "append",
        path: "./App.tsx",
        pattern: "// PLOP GITHB ISSUE NUMBER",
        template: `  "{{issueNumber}}",`,
      },
      {
        type: "append",
        path: "./App.tsx",
        pattern: "// PLOP GITHB ISSUE COMPONENT",
        template: `      case "{{issueNumber}}":
        return <Issue{{issueNumber}} />;`,
      },
    ];
  },
};

module.exports = { type, config };
