import { useAppContext } from '../../../../context/context';
import { ChipStyled } from '../../../../style/Mui-Style';
import { colorTimeLimitReference, iconTimeLimit } from "../../../../utils/constants";
import { timeFormat } from '../../../../utils/genericFunction.js';

export default function ChipIcon({ name, timeLimitStep, minutes, seconds, size }) {
    const { winner } = useAppContext();

    const ChipLabel = () => {
        if (winner) {
            return name
        } else {
            return name + " " + timeFormat(minutes) + ":" + timeFormat(seconds)
        }
    }

    return (
        <ChipStyled
            icon={iconTimeLimit[timeLimitStep]}
            label={ChipLabel()}
            color={colorTimeLimitReference[timeLimitStep]}
            size={size} />
    )
}
