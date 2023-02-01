import { useState, useEffect } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import { AcctualDate } from "../AcctualDate";
import("./style.css");


const Form = ({ calculateResault, result }) => {
    const [currency, setCurrency] = useState(currencies[0].shortName);
    const [amountToBeConverted, setAmountToBeConverted] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResault({ amountToBeConverted, currency });
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <AcctualDate />
            <h1 className="form__header">
                Przelicznik walut
            </h1>
            <p>
                <label>
                    <span className="form__labelText">
                        Kwota w zł*
                    </span>
                    <input
                        value={amountToBeConverted}
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
                                key={currency.shortName}
                                value={currency.shortName}
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