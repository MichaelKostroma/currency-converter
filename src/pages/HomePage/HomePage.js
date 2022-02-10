import React, {useEffect, useState} from 'react';
import CurrencyInput from "../../components/CurrencyInput";
import {Button} from "@mui/material";
import {NavLink} from "react-router-dom";
import "./HomePage.css"

const HomePage = ({ currencies, format }) => {

    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState('USD');
    const [currency2, setCurrency2] = useState('EUR');


    useEffect(() => {
        if (!!currencies) {
            function init() {
                handleAmount1Change(1);
            }
            init();
        }
    }, [currencies]);


    function handleAmount1Change(amount1) {
        setAmount2(format(amount1 * currencies[currency2] / currencies[currency1]));
        setAmount1(amount1);
    }

    function handleCurrency1Change(currency1) {
        setAmount2(format(amount1 * currencies[currency2] / currencies[currency1]));
        setCurrency1(currency1);
    }

    function handleAmount2Change(amount2) {
        setAmount1(format(amount2 * currencies[currency1] / currencies[currency2]));
        setAmount2(amount2);
    }

    function handleCurrency2Change(currency2) {
        setAmount1(format(amount2 * currencies[currency1] / currencies[currency2]));
        setCurrency2(currency2);
    }

    return (
        <div>
            <NavLink to="/currencyTable" className="linkTableBtn">
                <Button variant="outlined">SHOW CURRENCY TABLE</Button>
            </NavLink>

            <h1>Currency Converter</h1>

            <CurrencyInput
                onAmountChange={handleAmount1Change}
                onCurrencyChange={handleCurrency1Change}
                currencies={Object.keys(currencies)}
                amount={amount1}
                currency={currency1} />

            <CurrencyInput
                onAmountChange={handleAmount2Change}
                onCurrencyChange={handleCurrency2Change}
                currencies={Object.keys(currencies)}
                amount={amount2}
                currency={currency2} />
        </div>
    );
};

export default HomePage;