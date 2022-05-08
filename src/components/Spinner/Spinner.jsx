import { Wheel } from 'react-custom-roulette'
import { useAppContext } from '../../context/context'
import LogoTeamPot from '../../images/LogoTeamPot.png'

export default function Spinner() {

    const { results,spinnData, prizeNumber, mustSpin, teamAsistent, start, reset, updateMustSpin, updateWinner, updateTimeLimitStep } = useAppContext()

    const handleWinner = () => {
        updateTimeLimitStep(1)
        updateMustSpin(false);
        reset()
        start()
        updateWinner(spinnData[prizeNumber].option)
    }

    return (
        <>
            {teamAsistent.length > 1 && !results ?
                <>
                    <img src={LogoTeamPot} style={{ width: "40%" }} alt="logo"/>
                    <Wheel
                        mustStartSpinning={mustSpin}
                        prizeNumber={prizeNumber}
                        data={spinnData}
                        onStopSpinning={handleWinner}
                        outerBorderColor="Gold"
                        outerBorderWidth={0}
                        radiusLineColor="Gold"
                        radiusLineWidth={1}
                        perpendicularText={true}
                        textDistance={80}
                    />
                </> :
                <img src={LogoTeamPot} style={{ width: "100%" }} alt="logo" />
            }
        </>

    )
}