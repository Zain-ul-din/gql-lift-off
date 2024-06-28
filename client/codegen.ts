import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4000/",
  documents: ["src/**/*.tsx"],
  generates: {
    "./src/__generate__/": {
      preset: "client"
    }
  },
  ignoreNoDocuments: true
};

export default config;