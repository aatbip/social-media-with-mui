import {
  Box,
  Container,
  createTheme,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import Feed from "./components/Feed";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  const changeMode = () => {
    console.log(mode); 
    setMode(mode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar changeMode={changeMode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default App;
