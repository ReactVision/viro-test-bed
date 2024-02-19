import packageJson from "./package.json";

const IS_DEV = process.env.APP_VARIANT === "development";

module.exports = () => {
  return {
    expo: {
      name: IS_DEV ? "NativeVision (Dev)" : "NativeVision",
      slug: "native-vision-demo" + (IS_DEV ? "-dev" : ""),
      version: packageJson.version,
      orientation: "portrait",
      icon: `./assets/images/icon${IS_DEV ? "-dev" : ""}.png`,
      scheme: "myapp",
      userInterfaceStyle: "automatic",
      splash: {
        image: `./assets/images/splash${IS_DEV ? "-dev" : ""}.png`,
        resizeMode: "contain",
        backgroundColor: "#ffffff",
      },
      updates: {
        fallbackToCacheTimeout: 0,
      },
      assetBundlePatterns: ["**/*"],
      plugins: [
        ["@viro-community/react-viro", { android: { xRMode: ["GVR", "AR"] } }],
      ],
      ios: {
        supportsTablet: true,
        bundleIdentifier: IS_DEV
          ? "com.rc04.nativevision.dev"
          : "com.rc04.nativevision",
        buildNumber: `${Math.floor(Number(Date.now() / 1000))}`,
        config: {
          usesNonExemptEncryption: false,
        },
      },
      android: {
        adaptiveIcon: {
          foregroundImage: `./assets/images/adaptive-icon${
            IS_DEV ? "-dev" : ""
          }.png`,
          backgroundColor: "#ffffff",
        },
        package: IS_DEV ? "com.rc04.nativevision.dev" : "com.rc04.nativevision",
        versionCode: Math.floor(Number(Date.now() / 1000)),
      },
      extra: {
        eas: {
          projectId: "eef69c9f-ddbe-45f2-933a-51ff4f8948b9",
        },
      },
    },
  };
};
