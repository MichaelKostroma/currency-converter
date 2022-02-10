import React from 'react';
import CurrencyTable from "../../components/CurrencyTable";
import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";

const CurrencyTablePage = ({ currencies, format }) => {
    return (
        <div>
            <NavLink to="/" className="linkConverterBtn">
                <Button variant="outlined">RETURN CURRENCY CONVERTER</Button>
            </NavLink>

            <h1>Currency Table</h1>

            <CurrencyTable currencies={currencies} format={format}/>
        </div>
    );
};

export default CurrencyTablePage;