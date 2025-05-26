import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'
function Navigation(){
    return(
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li>
              <Link to="/Details">Details</Link>
            </li>

          </ul>
        </nav>        
    )
}
export default Navigation