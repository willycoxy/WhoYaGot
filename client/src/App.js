import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// regular pages
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

//all the team pages
import Bruins from './pages/Bruins';
import Sabers from './pages/Sabers';
import RedWings from './pages/RedWings';
import Canadiens from './pages/Canadiens';
import Senators from './pages/Senators';
import Lightning from './pages/Ligthning';
import MapleLeafs from './pages/MapleLeafs';
import Panthers from './pages/Panthers';
import Hurricanes from './pages/Hurricanes';
import Devils from './pages/Devils';
import Islanders from './pages/Islanders';
import Rangers from './pages/Rangers';
import Flyers from './pages/Flyers';
import Penguins from './pages/Penguins';
import Capitals from './pages/Capitals';
import BlueJackets from './pages/BlueJackets';
import Blackhawks from './pages/Blackhawks';
import Stars from './pages/Stars';
import Avalanche from './pages/Avalanche';
import Blues from './pages/Blues';
import Predators from './pages/Predators';
import Jets from './pages/Jets';
import Wild from './pages/Wild';
import Flames from './pages/Flames';
import Oilers from './pages/Oilers';
import Kings from './pages/Kings';
import Sharks from './pages/Sharks';
import Canucks from './pages/Canucks';
import Coyotes from './pages/Coyotes';
import Ducks from './pages/Ducks';
import GoldenKnights from './pages/GoldenKnights';
import Kraken from './pages/Kraken';

//app bar
import AppNavBar from './components/NavBar/NavBar';

//mui 
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

  const httpLink = createHttpLink({
    uri: '/graphql',
  });

  const navItems = [""];
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
  
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
        </Typography>
          <Divider  />
            <List>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
      </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  function App() {
    return (
      <ApolloProvider client={client}>
        <Router   >
          <div className = "container" >
            <Routes>
              <Route path="/" />
              <Route path="/home" exact element={<Home></Home>}></Route>
              <Route path="/signup" element={<Signup></Signup>}></Route>
              <Route path="/login" element={<Login></Login>}></Route>
              <Route path="*" element={<NoMatch />}/>    
              <Route path="/Bruins" element={<Bruins></Bruins>}></Route>
              <Route path="/Sabers" element={<Sabers></Sabers>}></Route>
              <Route path="/RedWings" element={<RedWings></RedWings>}></Route>
              <Route path="/Canadiens" element={<Canadiens></Canadiens>}></Route>
              <Route path="/Senators" element={<Senators></Senators>}></Route>
              <Route path="/Lightning" element={<Lightning></Lightning>}></Route>
              <Route path="/MapleLeafs" element={<MapleLeafs></MapleLeafs>}></Route>
              <Route path="/Panthers" element={<Panthers></Panthers>}></Route>
              <Route path="/Hurricanes" element={<Hurricanes></Hurricanes>}></Route>
              <Route path="/Devils" element={<Devils></Devils>}></Route>
              <Route path="/Islanders" element={<Islanders></Islanders>}></Route>
              <Route path="/Rangers" element={<Rangers></Rangers>}></Route>
              <Route path="/Flyers" element={<Flyers></Flyers>}></Route>
              <Route path="/Penguins" element={<Penguins></Penguins>}></Route>
              <Route path="/Capitals" element={<Capitals></Capitals>}></Route>
              <Route path="/BlueJackets" element={<BlueJackets></BlueJackets>}></Route>
              <Route path="/Blackhawks" element={<Blackhawks></Blackhawks>}></Route>
              <Route path="/Stars" element={<Stars></Stars>}></Route>
              <Route path="/Avalanche" element={<Avalanche></Avalanche>}></Route>
              <Route path="/Blues" element={<Blues></Blues>}></Route>
              <Route path="/Predators" element={<Predators></Predators>}></Route>
              <Route path="/Jets" element={<Jets></Jets>}></Route>
              <Route path="/Wild" element={<Wild></Wild>}></Route>
              <Route path="/Flames" element={<Flames></Flames>}></Route>
              <Route path="/Oilers" element={<Oilers></Oilers>}></Route>
              <Route path="/Kings" element={<Kings></Kings>}></Route>
              <Route path="/Sharks" element={<Sharks></Sharks>}></Route>
              <Route path="/Canucks" element={<Canucks></Canucks>}></Route>
              <Route path="/Canadiens" element={<Canadiens></Canadiens>}></Route>
              <Route path="/Coyotes" element={<Coyotes></Coyotes>}></Route>
              <Route path="/Ducks" element={<Ducks></Ducks>}></Route>
              <Route path="/GoldenKnights" element={<GoldenKnights></GoldenKnights>}></Route>
              <Route path="/Kraken" element={<Kraken></Kraken>}></Route>
            </Routes>
          </div>
          <Box color="inherit"   sx={{ color:'red', display: 'flex' }}>
            <AppBar  className='flex-bar' component="nav" >
              <Toolbar>
                <IconButton  
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  sx={{ mr: 2, display: { sm: 'none' } }}>
                    <MenuIcon />
                </IconButton>
                  <Typography 
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                      {navItems.map((item) => (
                        <Button  key={item} sx={{ color: '#fff' }}>     {item[0]}  <a href ="/"> 
                          <img src ="https://wallpaperset.com/w/full/0/6/d/84243.jpg" width={200} height={100}></img></a>
                        </Button>
                      ))}
                  </Typography>
                    <Box   sx={{ display: { xs: 'none', sm: 'block' } }}>
                      {navItems.map((item) => (
                        <Button  key={item} sx={{ color: '#fff' }}>     
                          {item[0]}  <a href ="/login"> 
                            <img src ="https://as2.ftcdn.net/v2/jpg/05/38/42/65/1000_F_538426536_LQ4THwklXkmKJQUdjwWZ8CgM3iOycado.jpg" width={200} height={100} ></img></a>
                              {item[1]}   <a href ="/signup"> 
                                <img src ="https://as2.ftcdn.net/v2/jpg/05/40/72/71/1000_F_540727130_OGaD7jpSgA9A6ghzZBwn7bPaRPhJ9kLn.jpg" width={200} height={100}  ></img></a>
                          </Button>
                      ))}
                    </Box>
              </Toolbar>
            </AppBar>
          </Box>
            <AppNavBar/>
        </Router> 
      </ApolloProvider> 
    );
  }

export default App;
