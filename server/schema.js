const { buildSchema } = require("graphql");

const schema = buildSchema(`

  type Pizza {
    id: ID
    title: String
    description: String
    price: Int
  }

  input PizzaInput {
    id: ID
    title: String!
    description: String!
    price: Int!
  }

  type Query {
    getAllPizzas: [Pizza]
    getPizza(id:ID): Pizza
  }

  type Mutation {
    addPizza(pizza: PizzaInput): Pizza
  }

`);

module.exports = schema;
