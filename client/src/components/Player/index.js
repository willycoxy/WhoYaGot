import React from 'react';
import './player.css';
import { Container } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_PLAYERS } from '../../utils/queries';

function Player(props) {
    const numbers = props.value;
    const keys  =  props.id;
    
    const {loading, data  } = useQuery(QUERY_PLAYERS);
    const players = data?.players ||[];
    
    if(loading)
    {
        return <div>Loading...</div>;
    }
    
  return (
   
    <>
        <Container  key={keys.toString()} value={numbers}>
            <div className="my-2">
                <div className ="player-container">
                    <div className="headerPlayer">
                        <div className="inheaderPlayer">
                            <div className = "logoPlayer">
                                <h1>Player Card</h1>
                                    <ul className="navigationPlayer">
                                        <li>TeamID:{players[numbers].TeamID}</li>
                                        <li>PlayerID:{players[numbers].PlayerID}</li>
                                        <li>Name:{players[numbers ].Name}</li>
                                        <li>Team:{players[numbers].Team}</li>
                                        <li>FantasyPoints:{players[numbers].FantasyPoints}</li>
                                    </ul>
                            </div>
                        </div>    
                    </div>
                </div>
            </div>
        </Container>
    </> 
  );
}

export default Player;