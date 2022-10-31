import React from 'react';
//import ThoughtList from '../components/ThoughtList';
//import ThoughtForm from '../components/ThoughtForm';
//import FriendList from '../components/FriendList';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
//import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
 // const { loading, data } = useQuery(QUERY_THOUGHTS);
 // const { data: userData } = useQuery(QUERY_ME_BASIC);
  //const thoughts = data?.thoughts || [];

  const loggedIn = Auth.loggedIn();

  <></>
};

export default Home;