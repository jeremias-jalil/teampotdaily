import HelpIcon from '@mui/icons-material/Help';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useAppContext } from '../../../context/context';
import { FacilitatorModeContainer } from '../../../style/Mui-Style';
import { facilitatorModeValues } from '../../../utils/constants';



export default function FacilitatorSelectMode() {
  const { cont, facilitatorMode, setMacilitatorMode } = useAppContext()

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
      <FormControl fullWidth disabled={cont}>
        <InputLabel id="facilitator-select-mode">Facilitator select mode</InputLabel>
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
          <b> Facilitator select mode</b>  <br />
          <b>Hotest:</b>  The next facilitator will be the one with the highest time.
          <br />
          <b>Random: </b> The next facilitator will be randomly selected.
          <br />
          <b> No Select: </b> The next facilitator will not be selected.

        </Typography>
      </Popover>
    </FacilitatorModeContainer>
  );
}
