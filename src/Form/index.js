import { useState, useRef } from "react";
import { currencies } from "../currencies";
import { Result } from "../Result";
import { AcctualDate } from "../AcctualDate";
import { StyledForm, FormButton, FormParagraph, FormHeader, FormSelect, FormSpan } from "./styled";


const Form = ({ calculateResault, result }) => {
    const [currency, setCurrency] = useState(currencies[0].shortName);
    const [amountToBeConverted, setAmountToBeConverted] = useState("");
    const inputRef = useRef(null)
    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResault({ amountToBeConverted, currency });
    }
    
    const  focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <AcctualDate />
            <FormHeader>
                Przelicznik walut
            </FormHeader>
            <p>
                <label>
                    <FormSpan>
                        Kwota w zł*
                    </FormSpan>
                    <input
                        ref={inputRef}
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
                    <FormSpan>
                        Waluta:
                    </FormSpan>
                    <FormSelect
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

                    </FormSelect>
                </label>
            </p>
            <p>
                <FormButton onClick={focusInput}>Przelicz!</FormButton>
            </p>
            <FormParagraph>
                Kursy pochodzą ze strony nbp.pl z Tabeli nr 009/C/NBP/2023 z dnia 2023-01-12

            </FormParagraph>
            <Result result={result} />
        </StyledForm>
    )
};

export default Form;