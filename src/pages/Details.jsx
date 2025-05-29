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
     


     useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + idMeal)
        .then(response => response.json())
            // 4. Setting *dogImage* to the image url that we received from the response above
        .then(data => setRecepie(data.meals[0]))
    },[])

    return(
        <>
                <h2 class="strName">{recepie.strMeal}</h2>
        {recepie && (<div className='recepiBox'>
            <img src={recepie.strMealThumb} class="image"></img>
                <div className="recepiText">
                    <p class="detail">Details</p>
                    <p class="strInstructions">{recepie.strInstructions}</p>
                </div>

        </div>)}

        </>  
    )
}
export default Details