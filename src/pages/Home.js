import React, { useState } from "react";
import QuoteCard from "../components/QuoteCard/QuoteCard";
import {getQuote, getQuoteNum} from "../api/getQuote";
import styles from "./Home.module.css";


export default function Home(){
    const [quote, setQuote] = useState("Click on the dice to get a free advice.");
    const [quoteNum, setQuoteNum] = useState(1);
    const [randomColor1, setRandomColor1] = useState("#1b202a");
    const [randomColor2, setRandomColor2] = useState("#313A49");
    
    function randomColor(){
        const randomClr1 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
        const randomClr2 = `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

        setRandomColor1(randomClr1);
        setRandomColor2(randomClr2);

        document.getElementsByClassName("container").style.backgroundColor = randomClr1;

    }
    async function fetchQuote(){
        const result = await getQuote();
        setQuote(result);
    }
    
    async function fetchQuoteNum(){
        const result = await getQuoteNum();
        setQuoteNum(result);
    }
    function handleClick(){
        fetchQuote();
        fetchQuoteNum();
        randomColor();
    };

    return (
        <div style={{backgroundColor:randomColor1}}className={styles.container}>
        <div className={styles.parent_div}>
            <QuoteCard quote={quote} quoteNum={quoteNum} random2={randomColor2}/>
            <button className={styles.diceWrapper} onClick={handleClick}>
            <div className={styles.face}>
                <div className={styles.topLeft}></div>
                <div className={styles.topRight}></div>
                <div className={styles.middle}></div>
                <div className={styles.bottomLeft}></div>
                <div className={styles.bottomRight}></div>
            </div>
            </button>
        </div>
        </div>

    );

}