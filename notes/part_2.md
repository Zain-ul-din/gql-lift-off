## Lift-off II: Resolvers

### Setup Guide

install following package,

```shell
npm install @apollo/datasource-rest
```

> What exactly is a resolver? A resolver is a function. It has the same name as the field that it populates data for. It can fetch data from any data source, then transforms that data into the shape your client requires.

Let's go over each parameter briefly to understand what they're responsible for:

`parent:`

parent is the returned value of the resolver for this field's parent. This will be useful when dealing with resolver chains.

`args:`

args is an object that contains all GraphQL arguments that were provided for the field by the GraphQL operation. When querying for a specific item (such as a specific track instead of all tracks), in client-land we'll make a query with an id argument that will be accessible via this args parameter in server-land. We'll cover this further in Lift-off III.

`contextValue:`
contextValue is an object shared across all resolvers that are executing for a particular operation. The resolver needs this argument to share state, like authentication information, a database connection, or in our case the RESTDataSource.

`info:`

info contains information about the operation's execution state, including the field name, the path to the field from the root, and more. It's not used as frequently as the others, but it can be useful for more advanced actions like setting cache policies at the resolver level.

### Code Gen on Server

#### [Link](https://www.apollographql.com/tutorials/lift-off-part2/08-server-codegen)

install following packages for code gen,

```shell
npm install -D @graphql-codegen/cli @graphql-codegen/typescript @graphql-codegen/typescript-resolvers
```

```typescript
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "./src/schema.ts",
  generates: {
    "./src/types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
};

export default config;
```
