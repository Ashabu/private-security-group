import React, { useContext, useEffect, useReducer } from 'react';
import './App.scss';
import axios from 'axios';
import { AppContext } from './Context/AppContext';
import Routing from './Routing/Routing';


function App() {
  const { activeLang, setAppLangs } = useContext(AppContext);
  const [, forceUpdate]  = useReducer(x => x + 1, 0);
  

  useEffect(() => {
    setAppLang();
    forceUpdate();
  }, [activeLang])

  const setAppLang = () => {
    axios.get(`${globalConfig.api_URL}/Assets/Language/${activeLang}.json`)
      .then(res => {
        setAppLangs({...res.data.Lang[0]});
      }).catch(e => {
        console.log(e)
      });
  };


  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
