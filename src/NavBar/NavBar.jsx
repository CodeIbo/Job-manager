import React, {useContext} from 'react'
import SearchBar from './SearchBar'
import clasess from './NavBar.module.scss'
import Context from '../Context/DataContext'

const NavBar = (props) =>{
    const localDataContext = useContext(Context)
    
    const setFormHandler = () =>{
        localDataContext.setShowForm(true)
    }
  

    return(
        <nav className={clasess['navBar']}>
            <button onClick={setFormHandler}>Add New</button>
            <SearchBar />
        </nav>
    )
}

export default NavBar 