import React from 'react'
import m1 from './m1.jpg'

const herosection = () =>{
    return(
        <div class="main">
        <div class="main__container">
            <div class="main__content">
                <h1>Join the <span class="text-highlight">Movement and Unlock</span> Unique Art</h1>
                <p>Discover our work below</p>
                {/* <button class="main__btn"><a href=" ">View Collection</a></button> */}
                <button class="main__btn">View Collection</button>
            </div>
            <div class="main__img--container">
                <img src={m1} alt="cat" id="main__img"/>
            </div>
        </div>
    </div>
    )
}
export default herosection