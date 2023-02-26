import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { useAppContext } from '../../../context/context';
import { ImputNewMemberContainer } from '../../../style/Mui-Style';
import { getTextColor } from '../../../utils/genericFunction';

export default function ImputNewMember({ teamMembers, setTeamMembers }) {
  const [nameTeam, setNameTeam] = useState('');
  const { cont, spinnerOn, isRunning, addNewMember } = useAppContext();

  const handleAddMember = () => {
    addNewMember(nameTeam);
    setTeamMembers(teamMembers + '\n' + nameTeam);
    setNameTeam('');
  };
  return (
    <ImputNewMemberContainer>
      <TextField
        label='Name'
        value={nameTeam}
        onChange={(e) => setNameTeam(e.target.value)}
        variant='filled'
        style={{ width: '100%' }}
        helperText={
          <p style={{ color: getTextColor(!isRunning) }}>
            Pause to add a new team member.
          </p>
        }
        disabled={spinnerOn || isRunning || !cont}
      />
      <Button
        variant='contained'
        onClick={handleAddMember}
        disabled={spinnerOn || (isRunning && cont !== 0) || nameTeam === ''}
      >
        Add a new member
      </Button>
    </ImputNewMemberContainer>
  );
}
