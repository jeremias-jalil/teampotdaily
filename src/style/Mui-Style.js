import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import { createTheme, styled } from '@mui/material/styles';


export const theme = createTheme({
  palette: {
    primary: {
      main: '#B8D094',
    },
    secondary: {
      main: '#44bb33',
    },
    success: {
      main: '#5C8C28',
    },
    info: {
      main: '#DDCA54',
    },
    warning: {
      main: '#DF7400',
    },
    error: {
      main: '#973C16',
    },
  }
});

export const BoxCont = styled(Box)(() => ({
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  margin: "10px",
  color: "white",
  scrollbarColor: "rgba(0, 0, 0, .5) rgba(0, 0, 0, 0)",
  scrollbarWidth: "thin",

  button: {
    background: "rgba(0, 0, 0, 0.466)",
    marginLeft:"0.5rem",
    marginRight:"0.5rem",
    color: "white"
  },

  '& .Mui-focused': {
    color: "white",

  },

  '& .Mui-focused:after': {
    color: "white",
    borderBottom: "2px solid white",
  },

  textarea: {
    color: "white",
    fontSize: "1.5rem",
    fontVariant: "small-caps",
    textAlign: "center",
    letterSpacing: "4px",
    lineHeight: "1.5rem"
  },

  label: {
    color: "white",
  },

  p: {
    color: "white",
  },

  '& label:focus': {
    color: "white",
  },

  '& button:hover': {
    background: "rgba(0, 0, 0, 0.87)"
  }

}))

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "90vh",
  backgroundColor: "rgba(66, 66, 66, 0.295)",
  color: "white",
}
));

export const AboutCont = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  alignContent: "center",
}))

export const ChipStyled = styled(Chip)(() => ({
  fontSize: "1rem",
  fontVariant: "small-caps"
}))

export const DailyListpersonCont = styled(Box)(() => ({
  marginLeft: "5%",
  marginRight: "5%",
  maxHeight: "25vh",
  overflowY: "auto",
  div: {
    margin: "2.5px",
  }
}))

export const SpinnerContainer = styled(Box)(() => ({
  '& .bhdLno': {
    width: 'clamp(40vh, 25vw, 500px)',
    height: 'clamp(40vh, 25vw, 500px)',
  }

}))

export const ImputNewMemberContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",

}))

export const FacilitatorModeContainer = styled(Box)(() => ({
  width: "95%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "space-around",
  gap: "10px",
  color: "white",
 }))

export const DailyConfigContainer = styled(Box)(() => ({
  padding: "2rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  gap:"0.5rem"

}))
