// PLOP 1
const githubGenerator = require("./generators/github");
const generatorGenerator = require("./generators/generator");

/**
 * # Code Generation File using plop.js.
 *
 * To use plop in this repo, it is reccommended to install plop cli globally.
 *
 * ```console
 * npm install -g plop
 * ```
 *
 * Then, you can run:
 *
 * ```console
 * plop
 * ```
 *
 * to generate with plop!
 *
 * @see https://plopjs.com
 * @export
 * @param {*} plop
 */

module.exports = (plop) => {
  // PLOP 2
  plop.setGenerator(githubGenerator.type, githubGenerator.config);
  plop.setGenerator(generatorGenerator.type, generatorGenerator.config);
};
