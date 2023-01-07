import axios from "axios";

export async function getQuote(){
    const reqUrl = `https://api.adviceslip.com/advice`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data.slip.advice;
};

export async function getQuoteNum(){
    const reqUrl = `https://api.adviceslip.com/advice`;
    const result = await axios.get(reqUrl);
    if(result.data)return result.data.slip.id;
};