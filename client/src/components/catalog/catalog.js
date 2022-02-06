import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GET_ALL_PIZZAS } from "../../query/pizza";

import Card from "../card/card";
import Form from "../form/form";

import styles from "./catalog.module.css";

function Catalog() {
  const { data, loading, refetch } = useQuery(GET_ALL_PIZZAS);
  const [pizzas, setPizzas] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (data && !loading) setPizzas(data.getAllPizzas);
  }, [data]);

  const handleClose = () => {
    setIsOpen(false);
    refetch();
  };

  if (loading) return <h1>LOADING...</h1>;
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.sectionTitle}>Choose your pizza!</h2>
      <div className={styles.catalog}>
        {pizzas.map((pizza) => (
          <React.Fragment key={pizza.id}>
            <Link to={`${pizza.id}`}>
              <Card product={pizza} />
            </Link>
          </React.Fragment>
        ))}
      </div>
      <div className={styles.add}>
        <button onClick={() => setIsOpen(true)}>Add Pizza</button>
      </div>
      {isOpen && <Form handleClose={handleClose} />}
    </div>
  );
}

export default Catalog;
