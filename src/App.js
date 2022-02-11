import {useState, useEffect} from "react";
import axios from "axios";
import {BrowserRouter as Router} from "react-router-dom";
import Routes from "./Routes";
import './App.css';


const App = () => {

  const [rates, setRates] = useState([]);

  useEffect(() => {

      axios.get('http://data.fixer.io/api/latest?access_key=332109aae8b978dd8ba64d60634d0e9f')
          .then(response => {
              setRates(response.data.rates);
          })

      const FreshDataFetch = setInterval(() => {
          axios.get('http://data.fixer.io/api/latest?access_key=332109aae8b978dd8ba64d60634d0e9f')
              .then(response => {
                  setRates(response.data.rates);
              })
      }, 1800000);

      return () => FreshDataFetch
  }, []);

  function format(number) {
    return number.toFixed(4);
  }

  return (
      <Router>
        <Routes currencies={rates} format={format}/>
      </Router>
  );
}

export default App;
