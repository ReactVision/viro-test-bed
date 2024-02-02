/**
 * Hologic Generator Generator
 *
 * See https://plopjs.com for more.
 */
const type = "generator";

const config = {
  description: "Create a new Plop generator config",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "Please enter a name for your new plop generator",
    },
  ],
  actions() {
    return [
      {
        type: "add",
        path: "generators/{{dashCase name}}/templates/TODO.hbs",
        templateFile: `generators/${type}/templates/TODO.hbs`,
      },
      {
        type: "add",
        path: "generators/{{dashCase name}}/index.js",
        templateFile: `generators/${type}/templates/index.js.hbs`,
      },
      {
        type: "append",
        path: "plopfile.js",
        pattern: "// PLOP 1",
        template: `const {{camelCase name}}Generator = require("./generators/{{dashCase name}}");`,
      },
      {
        type: "append",
        path: "plopfile.js",
        pattern: "// PLOP 2",
        template: `  plop.setGenerator({{camelCase name}}Generator.type, {{camelCase name}}Generator.config);`,
      },
    ];
  },
};

module.exports = {
  type,
  config,
};
