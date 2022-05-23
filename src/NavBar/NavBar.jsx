import React from 'react'
import SearchBar from './SearchBar'
import clasess from './NavBar.module.scss'

const NavBar = (props) =>{

    const setFormHandler = () =>{
        props.buttonManager(true)
    }
    const filterHandler = (filterObject) =>{
        props.filter(filterObject)
    }

    return(
        <nav className={clasess['navBar']}>
            <button onClick={setFormHandler}>Add New</button>
            <SearchBar filter={filterHandler}/>
        </nav>
    )
}

export default NavBar 