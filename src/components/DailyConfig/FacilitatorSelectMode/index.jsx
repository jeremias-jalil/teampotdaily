import HelpIcon from '@mui/icons-material/Help';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';

import { useState, useEffect } from 'react';
import { useAppContext } from '../../../context/context';
import { FacilitatorModeContainer } from '../../../style/Mui-Style';
import { facilitatorModeValues } from '../../../utils/constants';

export default function FacilitatorSelectMode() {
  const {
    cont,
    settings,
    updateFacilitatorMode,
    updateEmojis,
    updateVoiceLanguage,
  } = useAppContext();

  const handleChange = (event) => {
    updateFacilitatorMode(event.target.value);
  };

  const handleVoiceLanguage = (event) => {
    updateVoiceLanguage(event.target.value);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [voiceList, setVoiceList] = useState([settings.voiceLanguage]);

  const getVoices = async () => {
    setTimeout(() => {
      const voices = speechSynthesis.getVoices();
      setVoiceList(voices);
    }, 30);
  };

  useEffect(() => {
    getVoices();
  }, [speechSynthesis]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <FacilitatorModeContainer>
      <IconButton
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}
      >
        <HelpIcon />
      </IconButton>
      <FormControl disabled={!!cont} fullWidth>
        <InputLabel id='facilitator-select-mode'>Facilitator mode</InputLabel>
        <Select
          labelId='facilitator-select-mode'
          id='facilitator-select'
          value={settings.facilitatorMode}
          label='Facilitator select mode'
          onChange={handleChange}
        >
          {Object.values(facilitatorModeValues).map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>
          <b>Selection mode for the next facilitator</b> <br />
          <b>Hotest:</b> The next facilitator is the person who took the longest
          time in the daily. <br />
          <b>Random:</b> The next facilitator is selected randomly. <br />
          <b>No selection:</b> The next facilitator is not selected.
        </Typography>
      </Popover>
      <FormControl disabled={!!cont} fullWidth>
        <InputLabel id='facilitator-select-mode'>Voice language</InputLabel>
        <Select
          labelId='Voice-language'
          id='Voice-language'
          value={settings.voiceLanguage}
          label='Voice language'
          onChange={handleVoiceLanguage}
        >
          {voiceList.map((item, index) => (
            <MenuItem key={index} value={item.voiceURI}>
              {item.voiceURI}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControlLabel
        control={
          <Switch
            checked={settings.emojis}
            color='primary'
            onChange={(e) => updateEmojis(e.target.checked)}
          />
        }
        label='Emojis'
        labelPlacement='top'
        disabled={!!cont}
      />
    </FacilitatorModeContainer>
  );
}
