import { render } from "@testing-library/react";
import App from "./App";
import { AppContextProvider } from "./context/context";

window.speechSynthesis={
  getVoices: ()=>[{lang:"es-ES"}]
}

test("should have a title", async () => {
  render(
  <AppContextProvider>
  <App />
  </AppContextProvider>);
});
