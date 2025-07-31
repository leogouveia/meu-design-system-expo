module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // NOTA: Este deve ser o último plugin na lista.
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui", "@meu-org/ui"],
          config: "../../packages/config/src/tamagui.config.ts",
          logTimings: true,
        },
      ],
    ],
  };
};
