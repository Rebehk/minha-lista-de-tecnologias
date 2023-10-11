import styles from "./header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>Minha lista de Tecnologias</span>
    </header>
  );
}
