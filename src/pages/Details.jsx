import { useState } from 'react'


 const initialRecepi={
     name: "Pasta",
        description: `
        the first step is to buy a good italian pasta:
        you also need fresh tomatoes`,
        price: 20.50,
        pictureUrl:"https://static01.nyt.com/images/2025/01/17/multimedia/CR-Lemony-Hummus-Pasta-wtkj/CR-Lemony-Hummus-Pasta-wtkj-threeByTwoMediumAt2X.jpg",
        originCountry:"Italy"
 }

function Details (){
     const [recepie, setRecepie] = useState(initialRecepi)
    return(
        <>

        <h2>Home</h2>
        <div className='recepiBox'>
            <img src={recepie.pictureUrl}></img>
                <p>{recepie.name}</p>

        </div>
        </>  
    )
}
export default Details