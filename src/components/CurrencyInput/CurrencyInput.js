import './currencyInput.css';
import {MenuItem, Select, TextField} from "@mui/material";

const CurrencyInput = ({amount, onAmountChange, currency, onCurrencyChange, currencies}) => {

    return (
    <div className="group">
        <TextField id="filled-basic" label={currency} variant="filled" helperText="Please enter a number" value={amount} onChange={ev => onAmountChange(ev.target.value)} />

      <Select value={currency} onChange={ev => onCurrencyChange(ev.target.value)}>
        {currencies.map((currency => (
          <MenuItem key={currency} value={currency}>{currency}</MenuItem>
        )))}
      </Select>
    </div>
  );
}

export default CurrencyInput;