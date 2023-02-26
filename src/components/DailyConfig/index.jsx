import { useState } from 'react';
import FacilitatorSelectMode from './FacilitatorSelectMode';
import ImputMembers from './ImputMembers';
import ImputNewMember from './ImputNewMember';
import ImputTime from './ImputTime';
import SetButton from './SetButton';
import { DailyConfigContainer } from '../../style/Mui-Style';

export default function DailyConfig() {
  const [teamMembers, setTeamMembers] = useState('');

  return (
    <DailyConfigContainer>
      <ImputMembers teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <ImputTime />
      <FacilitatorSelectMode />
      <ImputNewMember
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
      <SetButton teamMembers={teamMembers} />
    </DailyConfigContainer>
  );
}
