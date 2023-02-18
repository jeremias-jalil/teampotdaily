import { useState } from 'react';
import { useAppContext } from '../../context/context';
import LogoTeamPot from '../../images/LogoTeamPot.png';


import SelectWinner from './SelectWinner';
import Spinner from './Spinner';

export default function DailySelector() {

    const { results, teamAsistent } = useAppContext()
    const [newWinner, setNewWinner] = useState('');

    return (
        <>
            {teamAsistent.length > 1 && !results ?
                <>
                    <img src={LogoTeamPot} style={{ width: "40%" }} alt="logo" />
                    <Spinner setNewWinner={setNewWinner} />
                    <SelectWinner setNewWinner={setNewWinner} newWinner={newWinner} />
                    
                </> :
                <>
                <img src={LogoTeamPot} style={{ width: "100%" }} alt="logo" />

                </>
            }
        </>

    )
}