import React, { useContext, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import { AppContext } from './Context/AppContext';
import Routing from './Routing/Routing';


function App() {
  const { activeLang, setAppLangs } = useContext(AppContext);


  useEffect(() => {
    setAppLang();
  }, [activeLang])

  const setAppLang = () => {
    axios.get(`http://localhost:9000/Assets/Language/${activeLang}.json`)
      .then(res => {
        setAppLangs({...res.data.Lang[0]});
      }).catch(e => {
        console.log(e)
      });
  };

  console.log('activeLang')

  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
