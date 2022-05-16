import Grid from '@mui/material/Grid';
import { useEffect } from 'react';
import './App.css';
import InputPerson from './components/InputPerson/InputPerson';
import Spinner from './components/Spinner/Spinner';
import Stopwatch from './components/Stopwatch/Stopwatch';
import BackGroundBase from './images/BackGroundBase.jpg';
import { BoxCont, Item } from "./style/Mui-Style";

function App() {

  useEffect(() => {
    document.body.style.backgroundImage = `url(${BackGroundBase})`;
  }, [])

  return (
    <>
      <BoxCont sx={{ flexGrow: 1 }} id="boxCont">
        <Grid container spacing={2}>
          <Grid item lg={4} sm={12} md={12}>
            <Item>
              <InputPerson />
            </Item>
          </Grid>
          <Grid item lg={4} sm={12} md={6}>
            <Item>
              <Stopwatch />
            </Item>
          </Grid>
          <Grid item lg={4} sm={12} md={6}>
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
