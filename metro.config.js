// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");

const fileTypes = [
  "obj",
  "mtl",
  "mp3",
  "JPG",
  "vrx",
  "hdr",
  "gltf",
  "glb",
  "bin",
  "arobject",
  "gif",
];

const config = getDefaultConfig(__dirname);

for (const fileType of fileTypes) {
  config.resolver.assetExts.push(fileType);
}

config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: true,
  },
});

module.exports = config;
