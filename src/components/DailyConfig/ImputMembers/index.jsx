import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { useAppContext } from '../../../context/context';

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
        return `${teamMembers.split('\n').filter((e) => e !== "").length} asistentes`
    }

    return (
        <>
            <TextField
                label="Listado de integrantes de la daily"
                multiline
                rows={row}
                value={teamMembers}
                onChange={handleChange}
                variant="filled"
                style={{ width: "100%" }}
                disabled={cont !== 0}
                helperText={getTotalTeamMembers()}
            />
        </>

    )
}
