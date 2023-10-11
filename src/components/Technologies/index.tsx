import { ITechnology } from "../../App";
import { Technology } from "../Technology";
import styles from "./technologies.module.css";

interface IProps {
  technologies: ITechnology[];
  onDelete: (id: string) => void;
  onChecked: (id: string) => void;
}

export function Technologies({ onChecked, onDelete, technologies }: IProps) {
  const technologiesQuantity = technologies.length;
  const completedTechnologies = technologies.filter(
    (technology) => technology.isChecked
  ).length;

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div>
          <p>Tecnologias criadas</p>
          <span className={styles.countTechnologies}>
            {technologiesQuantity}
          </span>
        </div>
        <div>
          <p className={styles.textPurple}>Concluidas</p>
          <span className={styles.countTechnologies}>
            {completedTechnologies} de {technologiesQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {technologies.map((technology: ITechnology) => (
          <Technology
            onChecked={onChecked}
            onDelete={onDelete}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
}
