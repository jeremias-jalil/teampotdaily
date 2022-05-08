import './App.css';
import Stopwatch from './components/Stopwatch/Stopwatch';
import Spinner from './components/Spinner/Spinner';
import InputPerson from './components/InputPerson/InputPerson';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import BackGroundBase from './images/BackGroundBase.jpg'

function App() {

  const BoxCont = styled(Box)(() => ({
    height: "100vh",
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
    },

    textarea:{
      color:"white",
      fontSize:"1.5rem",
      fontVariant: "small-caps",
      textAlign:"center",
      letterSpacing:"4px",
      lineHeight:"2rem"
    },


    '& button:hover': {
      background: "rgba(0, 0, 0, 0.87)"

    }

  }))

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "80vh",
    backgroundColor: "rgba(66, 66, 66, 0.295)",
    color: "white"

  }
  ));

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BackGroundBase})`;
  }, [])

  return (
    <>
      <BoxCont sx={{ flexGrow: 1 }} id="boxCont">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Item>
              <InputPerson />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Stopwatch />
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <Spinner />
            </Item>
          </Grid>
        </Grid>
      </BoxCont>
    </>
  );
}

export default App;
