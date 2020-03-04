import React from "react"
import {Link} from "react-router-dom"
import styled from 'styled-components'

const Nav = styled.div`
display: flex;
width: 10%;
justify-content:space-evenly;
margin 20px auto;
`
 
const Navigation = () =>{
    return (
            <Nav>
                <div>
                <Link to="/">HOME</Link>
                </div>
                <div>
                <a href="">ABOUT US</a>
                </div>
            </Nav>
    )
}

export default Navigation