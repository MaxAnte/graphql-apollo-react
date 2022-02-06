const express = require("express");
const mongoose = require("mongoose");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const Pizza = require("./schemas/pizza");

const app = express();

app.use(cors());

const rootValue = {
  getAllPizzas: async () => {
    const pizzas = await Pizza.find({});
    return pizzas;
  },
  getPizza: async ({ id }) => {
    const pizza = await Pizza.findById(id);
    return pizza;
  },
  addPizza: async ({ pizza }) => {
    console.log(pizza);
    const newPizza = new Pizza(pizza);
    await newPizza.save();
    return newPizza;
  },
};

mongoose.connect(
  "mongodb+srv://pizzahouse:12341234@cluster0.jruma.mongodb.net/app?retryWrites=true&w=majority",
  () => {
    console.log("mongodb is connected!");
  },
  (e) => console.error(e)
);

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue,
  })
);

app.listen(5000, () => console.log("Server is running..."));
