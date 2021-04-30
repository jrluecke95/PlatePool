import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Home from './pages/Home'
import AltHome from './pages/AltHome'
import './App.css'
import Login from "./pages/Login";
import Register from './pages/Register'
import Navbar from "./components/Navbar";
import CreatePlate from "./pages/CreatePlate";
import { UserProfile } from "./pages/UserProfile";
import ProfileView from "./pages/ProfileView";
import Sidebar from './components/Sidebar/MobileSidebar'
import SearchPost from "./pages/SearchPost";
import EditProfile from './pages/EditProfile'
import { useSelector } from "react-redux";



function App() {
  const user = useSelector((state) => state.user);
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Sidebar />
        <Container style={{ margin: '2em auto' }}>
            <Switch>
              <Route path="/" exact>
                {user ? <Home /> : <AltHome />}
              </Route>
              <Route path='/register'>
                <Register />
              </Route>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/CreatePlate'>
                <CreatePlate />
              </Route>
              <Route path='/profile'>
                <UserProfile />
              </Route>
              <Route path='/:id/proSection'>
                <ProfileView />
              </Route>
              <Route path='/:id/plate'>
                <SearchPost />
              </Route>
              <Route path='/editprofile'>
                <EditProfile />
              </Route>
              {/* <Route path="/#">
                <Page />
              <Route path='/images'>
                <ImageTest />
              </Route>*/}
            </Switch>
          </Container>
      </Router>
        
    </div>
  );
}

export default App;