const { execSync } = require("child_process");
const { readFileSync, writeFileSync } = require("fs");
// cd ../viro
process.chdir("../viro");

// temporarily set package.json version
const packageJsonData = readFileSync("./package.json");
const packageJson = JSON.parse(packageJsonData);
const originalVersion = packageJson.version;
const newVersion = packageJson.version + "-dev-" + Date.now();
packageJson.version = newVersion;
console.log(" ==> New version: " + newVersion);
writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

//&& ./prepare_release.sh
console.log(" ==> Prepare release script");
execSync("./prepare_release.sh");

// write viro package.json to original version
console.log(" ==> Reset to original version: " + originalVersion);
packageJson.version = originalVersion;
writeFileSync("./package.json", JSON.stringify(packageJson, null, 2));

// && cd ../viro-test-bed
process.chdir("../viro-test-bed");

// update package.json in test bed app
console.log(
  " ==> Update test bed dependency: " +
    `../viro/viro-community-react-viro-${newVersion}.tgz`
);
const testBedPackageJsonData = readFileSync("./package.json");
const testBedPackageJson = JSON.parse(testBedPackageJsonData);

// `../viro/viro-community-react-viro-${newVersion}.tgz`
testBedPackageJson.dependencies[
  "@viro-community/react-viro"
] = `../viro/viro-community-react-viro-${newVersion}.tgz`;
writeFileSync("./package.json", JSON.stringify(testBedPackageJson, null, 2));

console.log(" ==> npm install");
// && npm i
execSync("npm i");
