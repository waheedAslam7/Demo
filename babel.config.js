module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    'react-native-reanimated/plugin',
    ["babel-plugin-root-import", {
      rootPathPrefix: "~/",
      rootPathSuffix: "src"
    }],
    ["module:react-native-dotenv", {
      "envName": "APP_ENV",
      "moduleName": "@env",
      "path": ".env"
    }]
  ],
  env: {
    production: {
      plugins: [
        ["babel-plugin-root-import", {
          rootPathPrefix: "~/",
          rootPathSuffix: "src"
        }],
        ["module:react-native-dotenv", {
          "envName": "APP_ENV",
          "moduleName": "@env",
          "path": ".env"
        }]
      ]
    }
  }
};