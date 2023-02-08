import { StyledAcctualDate } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

export const AcctualDate = () => {

    const date = useCurrentDate();

    return (
        <StyledAcctualDate>
            Dzisiaj jest {date.toLocaleDateString(
                undefined,
                { weekday: "long", day: "numeric", month: "long" }
            )},{" "}
            {date.toLocaleTimeString()}
        </StyledAcctualDate>
    );
}