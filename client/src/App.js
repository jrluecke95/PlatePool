import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'
import { Container } from "@material-ui/core";
import Home from './pages/Home'
import './App.css'
import Login from "./pages/Login";
import Register from './pages/Register'



function App() {

  return (
    <div className="App">

      <Router>
        <AppBar position="static">
          <Toolbar variant="dense">          
            <Typography variant="h6" color="inherit">
              GreenLeaf
            </Typography>
              <>
              <Button color="inherit" component={NavLink} to="/">
                  Restaurants
                </Button> 
                <Button color="inherit" component={NavLink} to="/List">
                  Order
                </Button>
                {/* <Button color="inherit" component={NavLink} to="/Add">
                  button
                </Button> */}
              </>
          </Toolbar>
        </AppBar>
        <Container style={{ margin: '2em auto' }}>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path='register'>
                <Register />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              {/* <Route path="/#">
                <Page />
              </Route>
              <Route path="/#">
                <Page />
              </Route>             */}
            </Switch>
          </Container>
      </Router>
        
    </div>
  );
}

export default App;
