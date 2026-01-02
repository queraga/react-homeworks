import "./App.css";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">My first MUI App</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 3 }}>
        <Typography variant="h5" gutterBottom>
          Welcome to the Zari Welt
        </Typography>
        <Button variant="contained" onClick={handleOpen}>
          Open Dialog
        </Button>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Title is here</DialogTitle>
        <DialogContent>
          <DialogContentText>Some Text here</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default App;
