import Grid from "@mui/material/Grid";
import { useEffect } from "react";
import "./App.css";
import About from "./components/About";
import DailyConfig from "./components/DailyConfig";
import DailySelector from "./components/DailySelector";
import DailyCommand from "./components/DailyCommand";
import BackGroundBase from "./images/BackGroundBase.jpg";
import { BoxCont, Item, AboutCont } from "./style/Mui-Style";

function App() {
  useEffect(() => {
    document.body.style.backgroundImage = `url(${BackGroundBase})`;
  }, []);

  return (
    <>
      <BoxCont sx={{ flexGrow: 1 }} id="boxCont">
        <Grid container spacing={2} className="gridContainer">
          <Grid item lg={4} sm={12} md={12} xs={12} className="gridItem">
            <Item>
              <DailyConfig />
            </Item>
          </Grid>
          <Grid item lg={4} sm={12} md={6} xs={12}>
            <Item>
              <DailyCommand />
            </Item>
          </Grid>
          <Grid item lg={4} sm={12} md={6} xs={12}>
            <Item>
              <DailySelector />
            </Item>
          </Grid>
        </Grid>
        <AboutCont>
          <About />
        </AboutCont>
      </BoxCont>
    </>
  );
}

export default App;
