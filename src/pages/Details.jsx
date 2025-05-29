import { useState , useEffect } from 'react'
import { useParams } from "react-router";
import './Details.css'


//useParams is a hook, therefor it is a function 
//after invoking the function a variable can be destructured
// this variable must match the dinamic route  

function Details (){
    //const idMeal = useParams().idMeal 
    const {idMeal} = useParams()
    console.log(idMeal)
     const [recepie, setRecepie] = useState(null)
     const [comments,setComments]= useState([{
        name:"my name",
        text:"it is good"
     },
     {
        name:"user",
        text:"yummy"
     }
    ])
    const [name, setName] = useState("")
    const [commented, setCommented] = useState("")


     useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal)
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setRecepie(data.meals[0]))
    },[idMeal])

    const handleSubmit = ()=>{
        setComments([...comments,{name,commented}])
        setName("") 
        setCommented("") 
    }
    
    return(
        <>
        {recepie && (
        <div>
            <h2 className="strName">{recepie.strMeal}</h2>

            <div className='recepiBox'>
                <img src={recepie.strMealThumb} className="image">
                </img>
                    <div className="recepiText">
                        <p className="detail">Details</p>
                        <p className="strInstructions">{recepie.strInstructions}</p>
                        
                        <ul>
                            {comments.map((comment,index )=> (<li key={index}><p>{comment.name},{comment.text}</p> </li>))}
                        </ul>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="insert your name..."/>
                        <textarea value={commented} onChange={(e) => setCommented(e.target.value)} placeholder="comments here..." rows={3}/>
                        <button onClick={handleSubmit}>Submit</button>
                    </div>
            </div>
        </div>
            
        
    )}
 
        </>  
    )
}
export default Details