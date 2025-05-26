import { useState } from 'react'
import { Link } from 'react-router-dom'


const initialRecepies = [
    {
        name: "Pasta",
        description: `
        the first step is to buy a good italian pasta:
        you also need fresh tomatoes`,
        price: 20.50,
        pictureUrl:"https://static01.nyt.com/images/2025/01/17/multimedia/CR-Lemony-Hummus-Pasta-wtkj/CR-Lemony-Hummus-Pasta-wtkj-threeByTwoMediumAt2X.jpg",
        originCountry:"Italy"
    },
    {
      name: "Soshi",
        description: `
        Salmen is the most popular Soshi fish:
        the rice is also important`,
        price: 25.50,  
        pictureUrl:"https://www.bizben.com/pictures/2922241.jpg?ver=1746158400",
        originCountry:"Japan"
    }
]

function Categories (){
         const [recepies, setRecepies] = useState(initialRecepies)
    return(
    <>
        <h1>categories</h1>
        {recepies.map(recepie => (
            <p><Link to="/Details">{recepie.name}</Link></p>

        ))}
        
    </>
    )
}
export default Categories