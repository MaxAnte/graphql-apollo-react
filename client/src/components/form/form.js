import { useMutation } from "@apollo/client";
import { useState } from "react";

import { ADD_PIZZA } from "../../mutations/pizza";

import styles from "./form.module.css";

function Form({ handleClose }) {
  const [form, setForm] = useState({ title: "", description: "", price: 0 });
  const [addPizza] = useMutation(ADD_PIZZA);

  const handleChangeText = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleChangeNumber = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: +e.target.value }));
  };

  const handleClick = (e) => {
    e.preventDefault();
    addPizza({
      variables: {
        pizza: form,
      },
    }).then(() => {
      setForm({ title: "", description: "", price: 0 });
      handleClose();
    });
  };

  return (
    <form className={styles.form}>
      <h3 className={styles.title}>Add some pizza</h3>
      <input
        type="text"
        name="title"
        value={form.title || ""}
        placeholder="Title"
        onChange={handleChangeText}
      />
      <textarea
        name="description"
        value={form.description || ""}
        placeholder="Description"
        onChange={handleChangeText}
      />
      <input
        type="number"
        name="price"
        value={form.price || 0}
        onChange={handleChangeNumber}
      />
      <button onClick={handleClick}>Add</button>
    </form>
  );
}

export default Form;
