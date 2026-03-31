const { getDefaultConfig } = require("expo/metro-config");
const { withUniwindConfig } = require("@niibase/uniwind/metro");
const {
  wrapWithReanimatedMetroConfig,
} = require("react-native-reanimated/metro-config");

/** @type {import('expo/metro-config').MetroConfig} */
// biome-ignore lint/correctness/noGlobalDirnameFilename: Ignore
const config = getDefaultConfig(__dirname);

const uniwindConfig = withUniwindConfig(wrapWithReanimatedMetroConfig(config), {
  cssEntryFile: "./src/styles/global.css",
  dtsFile: "./src/typings/uniwind-types.d.ts",
});

module.exports = uniwindConfig;
