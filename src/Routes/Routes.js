import React from "react";
import {Switch, Route } from 'react-router-dom'
import CurrencyTablePage from "../pages/CurrencyTablePage";
import HomePage from "../pages/HomePage/HomePage";
import {Redirect} from "react-router-dom";


const Routes = ({ currencies, format }) => (
    <Switch>
        <Route exact path="/"> <Redirect to='/home'/></Route>
        <Route exact path="/home">
            <HomePage currencies={currencies} format={format}/>
        </Route>
        <Route exact path="/currencyTable">
            <CurrencyTablePage currencies={currencies} format={format}/>
        </Route>
    </Switch>
);


export default Routes