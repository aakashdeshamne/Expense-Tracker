import React,{useMemo, useState} from 'react';
import styled from "styled-components";
import bg from './img/bg.png';
import { MainLayout } from "./src/styles/Layouts";
import Orb from "../frontend/src/Components/Orb/Orb";
import Navigation from "../frontend/src/Components/Navigation/Navigation";
import { useGlobalContext } from './context/globalContex';
import Dashboard from './src/Component/Dashboard/Dashboard';
import Income from './src/Component/Income/Income';
import Expenses from '../frontend/src/Components/Expenses/Expenses';
function App() {
  const [active,setActive] =React.useState(1);
  const global=useGlobalContext()
  const displayData = () => {
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Income />
      case 4: 
        return <Expenses />
      default: 
        return <Dashboard />
    }
  }

  const orbMemo=useMemo(()=>{
      return <Orb/>
  },[]);
  console.log(useState);
  return (
    <AppStyled bg={bg} className="App">
       {orbMemo}
      <MainLayout>
       
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}
const AppStyled=styled.div`
height: 100vh;
background-image: url(${props => props.bg});
position: relative;
main{
  flex: 1;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  &::-webkit-scrollbar{
    width: 0;
  }
}
`;

export default App;
