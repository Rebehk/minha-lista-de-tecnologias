import { PlusCircle } from "phosphor-react";
import styles from "./formAddNewTechnology.module.css";
import { useState } from "react";

interface IProps {
  addTechnology: (technologyTitle: string) => void;
}

export function FormAddNewTechnology({ addTechnology }: IProps) {
  const [title, setTitle] = useState("");

  function handleSubmit(event: { preventDefault: () => void }) {
    event.preventDefault();

    addTechnology(title);
    setTitle("");
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          value={title}
          placeholder="Adicione uma nova tecnologia"
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.btn}>
          <span>Criar</span>
          <PlusCircle size={16} weight="bold" />
        </button>
      </form>
    </>
  );
}
