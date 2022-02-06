import { gql } from "@apollo/client";

export const ADD_PIZZA = gql`
  mutation addPizza($pizza: PizzaInput) {
    addPizza(pizza: $pizza) {
      id
      title
      description
      price
    }
  }
`;
