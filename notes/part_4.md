### Mutations

Much like the Query type, the Mutation type serves as an entry point to our schema. It follows the same syntax as the schema definition language, or SDL, that we've been using so far.

```graphql
# same as query syntax looks like this

type Mutation {
  waitListUser(email: String!): User
}
```
