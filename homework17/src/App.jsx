import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Button, Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ThemeButton = styled(Button)(({ theme }) => ({
  marginTop: "24px",
  padding: "10px 20px",
  borderRadius: "18px",
  fontSize: "16px",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: "700",
  transition: "background-color 150ms ease, transform 120ms ease",

  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-1px)",
  },

  "&:active": {
    transform: "translateY(0)",
  },
}));

function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark((prev) => !prev);
  const lightTheme = createTheme({ palette: { mode: "light" } });
  const darkTheme = createTheme({ palette: { mode: "dark" } });
  const currentTheme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
            bgcolor: "background.paper",
          }}
        >
          <Box sx={{ mb: 2 }}>
            {isDark ? (
              <DarkModeIcon
                sx={{
                  fontSize: 64,
                }}
              />
            ) : (
              <LightModeIcon
                sx={{
                  fontSize: 64,
                }}
              />
            )}
          </Box>
          <Typography variant="h5">
            {isDark ? "Dark mode" : "Light mode"}
          </Typography>
          <ThemeButton variant="outlined" onClick={toggleTheme}>
            Switch Theme
          </ThemeButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
