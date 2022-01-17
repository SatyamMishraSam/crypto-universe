import {
  AppBar,
  Container,
  createTheme,
  makeStyles,
  Select,
  MenuItem,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";

const useStyle = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontSize: "30px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  
}));

const Header = () => {
  const classes = useStyle();
  const history = useHistory();

  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
      
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="inherit">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => history.push("/")}
              className={classes.title}
            >
              Crypto Universe
            </Typography>
            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                display:"flex",
                alignContent:"center",
                border:"3px solid gold"
                
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"EUR"}>EURO</MenuItem>
            </Select>
            
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
