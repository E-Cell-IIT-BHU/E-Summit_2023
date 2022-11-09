import React from "react";
import styles from "./header.module.scss";

function header() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >  <div className={styles.maincontainer}>
    <div className={styles.submaincontainer}>
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
                    <b  className={styles.diffText}>inspiration</b>
                    <b  className={styles.diffText}>unique</b>
                    <b  className={styles.diffText}>market</b>
                    <b  className={styles.diffText}>identity</b>
                  </span>
                  <hr />
                </div>
                <main>
                  <p className={styles.para}>
                    E-Summit`22 will present rays of hope so dazzling that theypenetrate even the darkness that veils our eyes.
                  </p>
                  <div className={styles.row}>
                    <button className={styles.button1}>
                      {/* Explore Features &nbsp; &gt; */}
                      Explore Features 
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
        </div>
    </div>
  );
}

export default header;
