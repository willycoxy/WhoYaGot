import React from 'react';
import Player from "../components/Player";
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../utils/queries';

const Home = () => {
  
  const teamIDSharks = 27;
  const { loading, data } = useQuery(QUERY_PLAYERS);
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
                player.TeamID === teamIDSharks ? (<Player Name={player.Name} PlayerID={player.PlayerID} FantasyPoints={player.FantasyPoints} TeamID={player.TeamID} Position={player.Position} Team ={player.Team} id={player._id} key={player._id } value={index} />) :(<></>) 
              ))}  
            </div>
          </div>
      </div>
    );
};

export default Home;