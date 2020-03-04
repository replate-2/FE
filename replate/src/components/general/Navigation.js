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
                <a href="">HOME</a>
                </div>
                <div>
                <a href="">ABOUT US</a>
                </div>
                <div>
                <Link to="/">LOG IN</Link>
                </div>
            </Nav>
    )
}

export default Navigation