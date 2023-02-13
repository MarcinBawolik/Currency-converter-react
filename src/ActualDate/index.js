import { StyledActualDate } from "./styled";
import { useCurrentDate } from "../useCurrentDate";

export const ActualDate = () => {

    const date = useCurrentDate();

    return (
        <StyledActualDate>
            Dzisiaj jest {date.toLocaleDateString(
                undefined,
                { weekday: "long", day: "numeric", month: "long" }
            )},{" "}
            {date.toLocaleTimeString()}
        </StyledActualDate>
    );
}
