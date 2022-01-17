
import { makeStyles } from '@material-ui/core';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './Pages/HomePage';
import SingleCoinPage from './Pages/SingleCoinPage';


function App() {

  const useStyle = makeStyles(()=>({
    App:{
      backgroundImage:"url(./banner2.jpg)",
      backgroundColor:'black',
      color:'white',
      minheight:'100vh'
    }
  }))

  const classes = useStyle();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
          <Route path="/" component ={HomePage} exact  />
          <Route path="/coins/:id" component ={SingleCoinPage} exact  />
      </div>
    </BrowserRouter>
  );
}

export default App;
