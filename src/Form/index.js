import { useState, useRef } from "react";                                   
import { Result } from "../Result";
import { ActualDate } from "../ActualDate";
import {
    StyledForm,
    FormButton,
    FormParagraph,
    FormHeader,
    FormSelect,
    FormSpan,
    Loading,
    Failure
} from "./styled";
import { useRatesData } from "../useRatesData";
import { useCurrentDate } from "../useCurrentDate";

const Form = () => {
    const inputRef = useRef(null)

    const [result, setResult] = useState();
    const ratesData = useRatesData();

    const calculateResult = (currency, amountToBeConverted) => {
        const rate = ratesData.rates[currency];
        
        setResult({
            sourceAmount: +amountToBeConverted,
            targetAmount: amountToBeConverted * rate,
            currency,
            
        });
        
    };

    const [currency, setCurrency] = useState("EUR");
    const [amountToBeConverted, setAmountToBeConverted] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amountToBeConverted);
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <ActualDate />
            <FormHeader>
                Przelicznik walut
            </FormHeader>
            {ratesData.state === "loading"
                ? (
                    <Loading>
                        Sekunda... <br /> Ładuje kursy z Europejskiego Banku Centralnego.
                    </Loading>
                )
                : (
                    ratesData.state === "error" ? (
                        <Failure>
                            Coś poszło nie tak. Sprawdź swoje połączenie z internetem.
                        </Failure>
                    )
                        : (
                            <>
                                <p>
                                    <label>
                                        <FormSpan>
                                            Kwota w zł*
                                        </FormSpan>
                                        <FormSelect as="input"
                                            ref={inputRef}
                                            value={amountToBeConverted}
                                            placeholder="Wpisz kwotę w zł"
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
                                            {Object.keys(ratesData.rates).map(((currency) => (
                                                <option
                                                    key={currency}
                                                    value={currency}
                                                >
                                                    {currency}
                                                </option>
                                            )))}

                                        </FormSelect>
                                    </label>
                                </p>
                                <p>
                                    <FormButton onClick={focusInput}>Przelicz!</FormButton>
                                </p>
                            </>
                        )
                )
            }

            <FormParagraph>
                Kursy walut pobierane są z Europejskiego Banku Centralnego <br />
                Aktualne na dzień {useCurrentDate().toLocaleDateString(
                undefined,
                { day: "numeric", month: "long", year: "numeric" }
            )}
            </FormParagraph>
            <Result result={result} />
        </StyledForm>
    )
};

export default Form;