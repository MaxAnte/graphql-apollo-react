import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_PIZZA } from "../../query/pizza";

import styles from "./product.module.css";

function Product() {
  const { id: prodID } = useParams();
  const { data, loading } = useQuery(GET_PIZZA, {
    variables: {
      id: prodID,
    },
  });
  const [product, setProduct] = useState(undefined);

  useEffect(() => {
    if (data && !loading) setProduct(data.getPizza);
  }, [data]);

  if (loading || !product) return <p>Loading...</p>;
  return (
    <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  );
}

export default Product;
