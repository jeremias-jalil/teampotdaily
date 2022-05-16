import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled,createTheme  } from '@mui/material/styles';

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
    alignItems: "center",
    alignContent: "center",
    margin: "10px",
    color: "white",
    scrollbarColor: "rgba(0, 0, 0, .5) rgba(0, 0, 0, 0)",
    scrollbarWidth: "thin",

    button: {
      background: "rgba(0, 0, 0, 0.466)",
      marginLeft: "10px",
      color:"white"
    },

    '& .Mui-focused':{
      color: "white",

    },

    '& .Mui-focused:after':{
      color: "white",
      borderBottom: "2px solid white",
    },

    textarea: {
      color: "white",
      fontSize: "1.5rem",
      fontVariant: "small-caps",
      textAlign: "center",
      letterSpacing: "4px",
      lineHeight: "2rem"
    },

    label:{
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
    color: "white"

}
));

