import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navigation.css'
function Navigation(){
  const navigate = useNavigate()
  const [word,setWord]= useState("")
    return(
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Categories">Categories</Link>
            </li>
            <li className='searchBox'>
              <span>
                <input type="text" value={word} onChange={e => setWord(e.target.value)} placeholder='your search word...'/>
                <button onClick={e => navigate("/SearchResult/" + word)}>search</button>
              </span>
            </li>
          </ul>
          
            
        </nav>        
    )
}
export default Navigation