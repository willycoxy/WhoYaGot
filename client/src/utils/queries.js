import { gql } from '@apollo/client';

 export const QUERY_USERS = gql`
  {
    users {
      _id
      username
      email
        players {
          _id
          TeamID
          PlayerID
          Name
          Team
          Position
          FantasyPoints
        }
    } 
  }
`;

export const QUERY_PLAYERS = gql`
  {
    players {
      _id
      TeamID
      PlayerID
      Name
      Team
      Position
      FantasyPoints
    }
  }
`;