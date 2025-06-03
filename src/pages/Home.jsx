import { useState } from 'react'
import './Home.css'


function Home (){
    
    return(
        <>
        <div className="homeBackground">
            <div className="homeText">
            <h1 className="homeTitle">Cooking Class</h1>
            <p className="homeDescription">
                Welcome to the cooking class, where we explore delicious recipes from around the world. </p>
            <p> please select a recipe under the categories menu</p>
            </div>
            <div className="imgContainer">
            <img src="https://img.freepik.com/free-photo/top-view-food-ingredients-with-vegetable-soup-bowl-notebook_23-2148834720.jpg?semt=ais_hybrid&w=740" alt="homeImage" className="homeImage"/>
            </div>
        </div>
        </>  
    )
}
export default Home