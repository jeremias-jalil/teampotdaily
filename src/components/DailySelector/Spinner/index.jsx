import { Wheel } from 'react-custom-roulette';
import { useAppContext } from '../../../context/context';
import {SpinnerContainer} from '../../../style/Mui-Style';

export default function Spinner({ setNewWinner }) {
    const { spinnData, prizeNumber, mustSpin, updateWinner } = useAppContext()

    const handleWinner = () => {
        updateWinner(spinnData[prizeNumber].option)
        setNewWinner("");
    }

    return (
        <SpinnerContainer>
        <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={spinnData}
            onStopSpinning={handleWinner}
            outerBorderColor="Gold"
            outerBorderWidth={0}
            radiusLineColor="Gold"
            radiusLineWidth={1}
            perpendicularText={false}
            textDistance={80}
            spinDuration={spinnData.length === 1 ? 0.0 : 0.3}
        />
        </SpinnerContainer>
    )
}
