import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useAppContext } from '../../../context/context';
import { getTextColor } from "../../../utils/genericFunction";
import {ImputNewMemberContainer} from '../../../style/Mui-Style';


export default function ImputNewMember({ teamMembers, setTeamMembers }) {
    const [nameTeam, setNameTeam] = useState('');
    const { cont, spinnerOn, isRunning, addNewMember } = useAppContext()

    const handleAddMember = () => {
        addNewMember(nameTeam)
        setTeamMembers(teamMembers + '\n' + nameTeam)
        setNameTeam("")
    }
    return (
        <ImputNewMemberContainer >
            <TextField
                label="Name"
                value={nameTeam}
                onChange={(e) => setNameTeam(e.target.value)}
                variant="filled"
                style={{ width: "100%" }}
                helperText={<p style={{ color: getTextColor(!isRunning) }} >'Pause the timer to add a new member'</p>}
                disabled={spinnerOn || isRunning || !cont}

            />
            <Button
                variant="contained"
                onClick={handleAddMember}
                disabled={spinnerOn || (isRunning && cont !== 0) || nameTeam === ""}
            >
                Add member
            </Button>
        </ImputNewMemberContainer>

    )
}
