import React from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import SignUpPage from "./Pages/SignUp";
import DynamicForm from "./Components/Forms/DynamicForm";
const theme = createTheme();

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <SignUpPage /> */}
        <DynamicForm />
      </ThemeProvider>
    </>
  );
};

export default App;
