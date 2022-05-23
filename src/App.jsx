import React, { useState, useEffect } from 'react';
import Form from './Form/Form';
import Data from './Data/Data';
import NavBar from './NavBar/NavBar';
import './index.scss';

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


  const dataHandler = (data) => {
    setlocalData((prevData) => [...prevData, data])
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

  const deleteHandler = (id) => {
    return setlocalData(localdata.filter(object => object.id !== id))
  }

  const FilterHandler = ((data) => {
    setClonedData(localdata.filter(oneObject => {
      return data.radio === 'skills' ? oneObject.skills.some((value) => { return value.toLowerCase().includes(data.input.toLowerCase()) }) : oneObject[data.radio].toLowerCase().includes(data.input.toLowerCase())
    }))
  })

  /*   const FilterHandler = ((data) => {
      setClonedData(localdata.filter((object) => {
        for (const [key, value] of Object.entries(object)) {
          if (data.radio === key) {
            if (value.includes(data.input)) {
              return object
            }
          }
        }
      }))
    })
    alternative way to filter data */

  const colorManagment = (objectColor) => {
    setColorChanger(objectColor)
  }

  useEffect(() => {
    setlocalData((prevState) => {
      return prevState.map(x => {
        if (x.id === colorChanger.id) {
          return { ...x, status: colorChanger.status }
        }
        return x
      })
    })

  }, [colorChanger])

  return (
    <React.Fragment>
      <NavBar buttonManager={setShowForm} filter={FilterHandler} />
      {showForm && <Form data={dataHandler} back={setShowForm} />}
      <Data jobs={clonedData} idData={deleteHandler} colorData={colorManagment} />

    </React.Fragment>
  );
}

export default App;
