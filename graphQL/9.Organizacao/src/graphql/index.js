const { join } = require("path");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge'); // Importando de @graphql-tools/merge



// Carregar todos os arquivos .graphql da pasta "modules" e suas subpastas
const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.graphql"));
/**
 * O loadFilesSync carrega todos os arquivos .graphql encontrados no diretório e subdiretórios
 * - __dirname: o diretório onde o código está sendo executado
 * - "modules": pasta onde estão armazenados os schemas
 * - "**": busca nas subpastas dentro de "modules"
 * - "*.graphql": busca arquivos com a extensão .graphql
*/

// Carregar todos os arquivos de resolvers (.js) da pasta "modules" e suas subpastas
const allResolvers = loadFilesSync(join(__dirname, "modules", "**", "resolvers.js"), { ignoreIndex: true });

/**
 * Mesclando os tipos e resolvers
 * mergeTypeDefs: Mescla todos os arquivos .graphql em um único schema
 * mergeResolvers: Mescla todos os resolvers em um único objeto de resolvers
 */
const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

module.exports = { typeDefs, resolvers };
