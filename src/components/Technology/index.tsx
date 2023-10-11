import { CheckCircle, Trash } from "phosphor-react";
import styles from "./technology.module.css";

interface Iprops {
  technology: {
    id: string;
    title: string;
    isChecked: boolean;
  };
  onDelete: (id: string) => void;
  onChecked: (id: string) => void;
}

export function Technology({ technology, onDelete, onChecked }: Iprops) {
  return (
    <div className={styles.technology}>
      <button
        className={styles.checkTechnology}
        onClick={() => onChecked(technology.id)}
      >
        {technology.isChecked ? (
          <CheckCircle size={22} color="#5E60CE" />
        ) : (
          <div />
        )}
      </button>

      <p className={technology.isChecked ? styles.textCompleted : ""}>
        {technology.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => onDelete(technology.id)}
      >
        <Trash size={22} />
      </button>
    </div>
  );
}
