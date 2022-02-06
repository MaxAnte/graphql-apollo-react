import { gql } from "@apollo/client";

export const GET_ALL_PIZZAS = gql`
  query {
    getAllPizzas {
      id
      title
      description
      price
    }
  }
`;

export const GET_PIZZA = gql`
  query getPizza($id: ID) {
    getPizza(id: $id) {
      id
      title
      description
      price
    }
  }
`;
