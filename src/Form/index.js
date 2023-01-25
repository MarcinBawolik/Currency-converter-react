import "./style.css";


const Form = (props) => (
<form className="form ">
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kantor wymiany walut</legend>

        <ul className="form__unorderedList">

            <li className="form__listItem"> <label>
                <span className="form__spanText ">Kwota do przewalutowania:*</span><input type="number" required
                    autofocus min="1" step="0.01" placeholder="Kwota do wymiany"
                    className="form__input" />
            </label>
            </li>
            <li className="form__listItem">
                <label>
                    <span className="form__spanText form__spanText--shorter">Waluta wejścia:</span><select
                        name="input">
                        <option value="PLN">PLN - złoty polski</option>
                        <option value="USD">USD - dolar amerykański</option>
                        <option value="EUR">EUR - euro</option>
                    </select>
                </label>
            </li>
            <li className="form__listItem">
                <label>
                    <span className="form__spanText form__spanText--shorter">Waluta wyjścia:</span><select
                        name="output">
                        <option value="PLN">PLN - złoty polski</option>
                        <option value="USD">USD - dolar amerykański</option>
                        <option value="EUR">EUR - euro</option>
                    </select>
                </label>
            </li>
        </ul>

    </fieldset>
    <button className="form__button">Przelicz</button>
    <fieldset className="form__fieldset">
        <legend className="form__legend">Wynik</legend>
        <p className="form__paragraph">
            <strong>0</strong>
        </p>
        <p className="form__paragraph">Kurs Walut z dnia 12.12.2022r. pochodzi ze strony nbp.pl</p>
    </fieldset>
</form>
)

export default Form;