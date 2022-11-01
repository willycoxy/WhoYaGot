import React from 'react';
import Auth from '../utils/auth';
import Player from "../components/Player";
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS, QUERY_USERS } from '../utils/queries';


const Home = () => {
  
  const { loading, data } = useQuery(QUERY_PLAYERS);
  const { users } = useQuery(QUERY_USERS);
 
  const loggedIn = Auth.loggedIn();
  const players = data?.players || [];

  if(loading)
    {
        return <div>Loading...</div>;
    }

    return (
      <div className="container">
        <h1 className = "playercard-title">NHL Players:</h1>
          <div className='Card-body'>
            <div class = "main-container" key={players._id}>
              {players.map((player, index ) => (  
                <Player id={player._id} key={player._id } value={index} />  
              ))}  
            </div>
          </div>
      </div>
    );
};

export default Home;