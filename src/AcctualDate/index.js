import { useEffect, useState } from "react";
import { StyledAcctualDate } from "./styled";


export const AcctualDate = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [])
    return (
        <StyledAcctualDate>
            Dzisiaj jest {date.toLocaleDateString(
                undefined,
                { weekday: "long", day: "numeric", month: "long" }
            )},{" "}
            {date.toLocaleTimeString()}
        </StyledAcctualDate>
    )

}