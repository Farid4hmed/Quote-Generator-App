import React from "react";
import styles from "./QuoteCard.module.css";


export default function QuoteCard(props){
    return (
        <div style={{backgroundColor:props.random2}}className={styles.wrapper}>
            <p className={styles.quoteNum}>Advice #{props.quoteNum}</p>
            <p className={styles.quote}>“{props.quote}”</p>
            <div className={styles.linesContainer}>
            <div className={styles.rectangle1}></div>
            <div className={styles.rectangle2}></div>
            <div className={styles.line1}></div><div className={styles.line2}></div>
            </div>
        </div>
    );
}