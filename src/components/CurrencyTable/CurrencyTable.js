import React, { useState } from 'react';
import { MenuItem, Select} from "@mui/material";
import "./CurrencyTable.css"

const CurrencyTable = ({ currencies, format }) => {

    const [baseCurrency, setBaseCurrency] = useState('EUR');
    const [baseAmount, setBaseAmount] = useState(1);

    function handleCurrencyChange(currency) {
        setBaseAmount(format(currencies[currency]));
        setBaseCurrency(currency);
    };

    return (
        <div>
            <Select value={baseCurrency} onChange={ev => handleCurrencyChange(ev.target.value)} className="currencySelect">
                {Object.keys(currencies).map((currency => <MenuItem key={currency} value={currency} className="currencyOption">{currency}</MenuItem>))}
            </Select>

            <div className="currencyContainer">
                {Object.entries(currencies).map(([key, value]) => <p key={key} className="currencyItem"> {key} = {format(baseAmount / value)} </p>)}
            </div>
        </div>
    );
};


export default CurrencyTable;