import { join } from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs, mergeResolvers } from "@graphql-tools/merge";

const allTypes = loadFilesSync(join(__dirname, "modules", "**", "*.graphql"));
const allResolvers = loadFilesSync(join(__dirname, "modules", "**", "resolvers.js"));

const typeDefs = mergeTypeDefs(allTypes);
const resolvers = mergeResolvers(allResolvers);

export { typeDefs, resolvers };