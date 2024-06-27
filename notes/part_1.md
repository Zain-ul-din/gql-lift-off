#### [Notes taken from the Course Lift-off I](https://www.apollographql.com/tutorials/lift-off-part1/01-feature-overview-and-setup)

This course uses "schema first" approach to build a complete project.

To build this feature, we'll use a "schema-first" design. That means we'll implement the feature based on exactly which data our client application needs. Schema-first design typically involves three major steps:

- **Defining the schema:** We identify which data our feature requires, and then we structure our schema to provide that data as intuitively as possible.
- **Backend implementation:** We build out our GraphQL API using Apollo Server and fetch the required data from whichever data sources contain it.
- **Frontend implementation:** Our client consumes data from our GraphQL API to render its views.

> One of the benefits of schema-first design is that it reduces total development time by allowing frontend and backend teams to work in parallel. The frontend team can start working with mocked data as soon as the schema is defined, while the backend team develops the API based on that same schema. This isn't the only way to design a GraphQL API, but we believe it's an efficient one, so we'll use it throughout this course.

### Graph

An interconnected set of data represented by a schema. It encompasses the relationships between different data types and how they can be queried or mutated.

> Now, if we think of each object as a node and each relationship as an edge between two nodes, we can think of our entire data model as a graph of nodes and edges. This is called our application's graph.

### SDL (GQL - Schema Definition Language)

A schema is collection of types and fields. The types can be scaler like `int`, `float`, `string`, `boolean`, and id or it can be an object.

```graphql
"I'm a regular description"
"""
I'm a block description
with a line break
"""
type SpaceCat {
  name: String!
  age: Int
}
```

_Example_

```graphql
"Schema for Space Cat"
type SpaceCat {
  name: String!
  age: Int
  missions: [Mission]
}
```

```graphql
"""
This is block description for SpaceCat Schema
"""
type SpaceCat {
  "name should be not null."
  name: String!
  age: Int
  missions: [Mission]
}
```

### Get started

To get started with our schema, we'll need a couple packages first: `@apollo/server`, `graphql` and `graphql-tag`.

- The `@apollo/server` package provides a full-fledged, spec-compliant GraphQL server.
- The `graphql` package provides the core logic for parsing and validating GraphQL queries.
- The `graphql-tag` package provides the gql template literal that we'll use in a moment.

Additional Packages to add mock data.

```shell
npm i @graphql-tools/mock @graphql-tools/schema
```

On the backend side, our first goal is to create a [GraphQL server](https://www.apollographql.com/tutorials/lift-off-part1/05-apollo-server) that can:

- Receive an incoming GraphQL query from our client
- Validate that query against our newly created schema
- Populate the queried schema fields with mocked data
- Return the populated fields as a response
