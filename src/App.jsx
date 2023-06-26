import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { TwitterFollowCard } from '../TwitterFollowCard';

import Juego from '../tic_tac_toc';
import './index.css';

function App() {
  const [count, setCount] = useState(0);
  const initialisFollowing = true;

  const users = [{
    userName:'midudev',
    name:'Miguel Garcia',
    isFallowing:true
  },
{
  userName:'emusk',
  name:'Elon Musk',
  isFallowing:false
},
{
  userName:'rpaniagua',
  name:'Ravel Paniagua',
  isFallowing:true
}]
  return (
    <>
     {/*
       users.map(({userName,name,isFallowing})=>(
        <TwitterFollowCard
        //formatUserName //pasando una function como una props
        userName={userName}
        name={name}
        initialisFollowing = {isFallowing}
        key={name}
      >
        {name}
      </TwitterFollowCard>
      ))*/
     }
     <Juego />
    </>
  );
}

export default App;
