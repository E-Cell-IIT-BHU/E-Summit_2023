import React from "react";
import styles from "./header.module.scss";

function header() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column1}>
              <div className={styles.content}>
                <div className={styles.heading}>
                  E-SUMMIT '23
                  <br />
                  <span> for digital &nbsp; </span>
                  <span>
                    <b>inspiration</b>
                    <b>unique</b>
                    <b>market</b>
                    <b>identity</b>
                  </span>
                  <hr />
                </div>
                <main>
                  <p>
                    E-Summit`22 will present rays of hope so dazzling that they
                    penetrate even the darkness that veils our eyes. The summit
                    is being organized on 5th and 6th February in hybrid mode.
                  </p>
                  <div className={styles.row}>
                    <button className={styles.button1}>
                      Click Me &nbsp; &gt;
                    </button>
                  </div>
                </main>
                <div className={styles.footer}>Join Our Work Team Now</div>
              </div>
            </div>
            <div className={styles.column2}>
              <div className={styles.image}></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default header;
