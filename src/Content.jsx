import styles from "./Content.module.css";

function Content({ tab }) {
  if (tab === "tab1") {
    return (
      <div className={styles.container}>
        <h3>Content 1</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          maiores incidunt illo minima quae recusandae impedit placeat nemo
          magni, eligendi vel ipsam id esse rem inventore! Sit nobis eligendi
          praesentium?
        </p>
      </div>
    );
  } else if (tab === "tab2") {
    return (
      <div className={styles.container}>
        <h3>Content 2</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          maiores incidunt illo minima quae recusandae impedit placeat nemo
          magni, eligendi vel ipsam id esse rem inventore! Sit nobis eligendi
          praesentium?
        </p>
      </div>
    );
  } else if (tab === "tab3") {
    return (
      <div className={styles.container}>
        <h3>Content 3</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          maiores incidunt illo minima quae recusandae impedit placeat nemo
          magni, eligendi vel ipsam id esse rem inventore! Sit nobis eligendi
          praesentium?
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <h3>Content 4</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
          maiores incidunt illo minima quae recusandae impedit placeat nemo
          magni, eligendi vel ipsam id esse rem inventore! Sit nobis eligendi
          praesentium?
        </p>
      </div>
    );
  }
}

export default Content;
