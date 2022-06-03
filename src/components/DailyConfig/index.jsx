import { useState } from 'react';
import ImputMembers from './ImputMembers';
import ImputNewMember from './ImputNewMember';
import ImputTime from './ImputTime';
import SetButton from './SetButton';

export default function ConfigDaily() {
  const [teamMembers, setTeamMembers] = useState('');
 
  return (
    <>
      <ImputMembers
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
      />
      <ImputTime />
      <SetButton teamMembers={teamMembers} />
      <ImputNewMember 
      teamMembers={teamMembers} 
      setTeamMembers={setTeamMembers}/>
    </>

  );
}