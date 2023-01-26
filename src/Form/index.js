import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import ("./style.css");


 const Form = ({calculateResault, result}) => {

    const [amoutToBeConverted, setAmountToBeConverted] = useState("")
    const [currency, setCurrency] = useState(currencies[0].index)
    

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResault(amoutToBeConverted, currency);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <h1 className="form__header">
                Przelicznik walut
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w zł*
                    </span>
                    <input
                        value={amoutToBeConverted}
                        placeholder="Wpisz kwotę w zł"
                        className="form__field"
                        type="number"
                        required
                        step="0.01"
                        onChange={({ target }) => setAmountToBeConverted(target.value)}
                    />
                </label>
            </p>
            <p>
                <label>
                    <span className="form__labelText">
                        Waluta:
                    </span>
                    <select
                        value={currency}
                        className="form__field"
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency => (
                            <option 
                            key={currency.index}
                            value={currency.index}
                            >
                                {currency.name}
                            </option>
                        )))}
                        
                    </select>
                </label>
            </p>
            <p>
                <button className="form__button">Przelicz!</button>
            </p>
            <p className="form__info">
                Kursy pochodzą ze strony nbp.pl z Tabeli nr 009/C/NBP/2023 z dnia 2023-01-12

            </p>
            <Result result={result} />

        </form>
    )
};

export default Form;