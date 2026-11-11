import { useState } from "react";
import Content from "./Content";
import styles from "./Header.module.css";

function Header() {
  const [tab, setTab] = useState(
    () => JSON.parse(localStorage.getItem("tab")) || "tab1",
  );

  localStorage.setItem("tab", JSON.stringify(tab));

  const tabHandler = (event) => {
    setTab(event.target.value);
  };

  return (
    <>
      <div className={styles.container}>
        <h1> Tabs Component with React</h1>
        <button
          className={tab === "tab1" ? styles.active : ""}
          value="tab1"
          onClick={tabHandler}
        >
          TAB 1
        </button>
        <button
          value="tab2"
          className={tab === "tab2" ? styles.active : ""}
          onClick={tabHandler}
        >
          TAB 2
        </button>
        <button
          value="tab3"
          className={tab === "tab3" ? styles.active : ""}
          onClick={tabHandler}
        >
          TAB 3
        </button>
        <button
          value="tab4"
          className={tab === "tab4" ? styles.active : ""}
          onClick={tabHandler}
        >
          TAB 4
        </button>
      </div>
      <Content tab={tab} />
    </>
  );
}

export default Header;
