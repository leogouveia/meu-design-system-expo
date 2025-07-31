// Aprenda mais em https://docs.expo.dev/guides/monorepos/
const { getDefaultConfig } = require("expo/metro-config");
const path = require("path");

// Encontra o diretório de trabalho do workspace raiz
const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, "../..");

const config = getDefaultConfig(projectRoot);

// 1. Assista a todos os arquivos no monorepo
config.watchFolders = [workspaceRoot];
// 2. Permita que o Metro resolva pacotes a partir do node_modules do workspace
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, "node_modules"),
  path.resolve(workspaceRoot, "node_modules"),
];
// 3. Force o Metro a resolver (symlink) os pacotes do workspace
config.resolver.disableHierarchicalLookup = true;

module.exports = config;
