import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    900: '#471a07',
    800: '#852600',
    700: '#9e3a11',
    600: '#943300',
    500: '#bf560b',
    400: '#DF7029',
    300: '#FF8B43',
    200: '#FFA65D',
    100: '#FFC378',
    50: '#f2d5b1',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App/>
    </ChakraProvider>
  </React.StrictMode>
);
