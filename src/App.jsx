import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { deepOrange } from "@mui/material/colors";
import { Accordion, Paper } from "@mui/material";
import { useState } from "react";
import MyApp from "./Components/MyApp";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import ReactRouterDom from "./Components/ReactRouterDom";


function App() {
  const [darkMode, setdarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      primary: {
        main: deepOrange[600],
      },
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
            <Route path="one" element={<div>this is post one</div>} />
          </Route>
          <Route path="/about" element={<div>About</div>} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
        {/* the code */}
        <MyApp />
        <ThemeProvider theme={theme}>
          <Paper>
            <Header
              checked={darkMode}
              onChange={() => setdarkMode(!darkMode)}
            />
            <Home />
          </Paper>
          {/* <Route exact path='/about' component={About}/> */}
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
