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

import * as React from 'react';
import { useAppContext } from '../../../context/context';
import { FacilitatorModeContainer } from '../../../style/Mui-Style';
import { facilitatorModeValues } from '../../../utils/constants';

export default function FacilitatorSelectMode() {
  const { cont, facilitatorMode, setMacilitatorMode, setEmojis } = useAppContext()

  React.useEffect(() => {
    if (localStorage.getItem("settings")) {
      const settings = JSON.parse(localStorage.getItem("settings"))
      setMacilitatorMode(settings.facilitatorMode)
    }
  }, [])



  const handleChange = (event) => {
    setMacilitatorMode(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <FacilitatorModeContainer >
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
        <HelpIcon />
      </IconButton>
      <FormControl fullWidth disabled={!!cont}>
        <InputLabel id="facilitator-select-mode">Modo de selección del próximo facilitador</InputLabel>
        <Select
          labelId="facilitator-select-mode"
          id="facilitator-select"
          value={facilitatorMode}
          label="Facilitator select mode"
          onChange={handleChange}
        >
          {Object.values(facilitatorModeValues).map((item, index) => (
            <MenuItem key={index} value={item}>{item}</MenuItem>
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
          <b>Modo de selección del proximo facilitador</b>  <br />
          <b>Mayor tiempo:</b>  El próximo facilitador es el que más tiempo tardó en la daily.
          <br />
          <b>Aleatorio: </b> El próximo facilitador es seleccionado de forma aleatoria.
          <br />
          <b>No seleccionar: </b> No se selecciona el próximo facilitador.

        </Typography>
      </Popover>
      <FormControlLabel
        control={<Switch color="primary" onChange={(e) => setEmojis(e.target.checked)} />}
        label="Emojis"
        labelPlacement="top"
        disabled={!!cont}
      />
    </FacilitatorModeContainer>
  );
}
