import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/context';
import { getTextColor } from "../../../utils/genericFunction";

export default function ImputMembers({ teamMembers, setTeamMembers }) {
    const [row, setRow] = useState(window.innerHeight / 80);
    const { cont } = useAppContext()
    const handleChange = (event) => {
        setTeamMembers(event.target.value);
    };
    const resizeRow = () => {
        setRow(window.innerHeight / 80)
    }
    useEffect(() => {
        const localTeam = localStorage.getItem("teampot")
        if (localTeam) setTeamMembers(localTeam)
        window.addEventListener('resize', resizeRow);
        return () => { window.removeEventListener('resize', resizeRow); }
    }, [])

    const getTotalTeamMembers = () => {
        return `${teamMembers.split('\n').filter((e) => e !== "").length} team asistent`
    }

    return (
        <>
            <TextField
                label="List your team members"
                multiline
                rows={row}
                value={teamMembers}
                onChange={handleChange}
                variant="filled"
                style={{ width: "80%" }}
                disabled={cont !== 0}
            />
            <Typography
                variant='h6'
                style={{ color: getTextColor(cont >= 1) }}>
                {getTotalTeamMembers()}
            </Typography>
        </>

    )
}
