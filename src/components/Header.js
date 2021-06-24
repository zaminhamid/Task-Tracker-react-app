import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title,onAdd}) => {
    
    return (
        <header className ='header'>

            <h1>{title}</h1>
            <Button  color  ='green'  text ='ADD' onClick= {onAdd}/>
            

            

              
        </header>
    )
}
Header.defaultProps ={
    title:'Task Tracker',
}


Header.propTypes={
    title:PropTypes.string.isRequired,
}
//const headingStyle ={
   // color:'red',
    //backgroundColor:'black'
       
//}

export default Header