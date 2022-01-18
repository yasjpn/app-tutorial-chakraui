import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}
