import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Data from './Data/Data';
import NavBar from './NavBar/NavBar';
import './index.scss';
import Context from './Context/DataContext';
function App() {


  const [showForm, setShowForm] = useState(false)
  const [localdata, setlocalData] = useState(JSON.parse(localStorage.getItem("data")))
  const [clonedData, setClonedData] = useState(structuredClone(localdata))
  const [colorChanger, setColorChanger] = useState('')

  if (localdata === null) {
    localStorage.setItem('data', JSON.stringify([]))
  }
  else {
    localStorage.setItem('data', JSON.stringify(localdata))

  }

  useEffect(() => {
    if (showForm) {
      document.body.classList.add('hidden');
    }
    setClonedData(localdata)
    return () => {
      document.body.classList.remove('hidden');
    };
  }, [showForm, localdata]);

  useEffect(() => {
    setlocalData((prevState) => {
      return prevState.map(singleObject => {
        if (singleObject.id === colorChanger.id) {
          return { ...singleObject, status: colorChanger.status }
        }
        return singleObject
      })
    })

  }, [colorChanger])

  return (
    <Context.Provider value={
      {
        localdata: localdata,
        clonedData: clonedData,
        setLocalData: setlocalData,
        setShowForm: setShowForm,
        setClonedData: setClonedData,
        setColor : setColorChanger
      }
    }>
      <NavBar />
      {showForm && <Form />}
      <Data  />

    </Context.Provider>
  );
}

export default App;