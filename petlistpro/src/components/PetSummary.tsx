import React, {useState} from 'react'
import { petInsight } from './PetModule'



function Petoverview() {
    let felines = petInsight[0].amount
    let canines = petInsight[1].amount
    let jurassics = petInsight[2].amount
    let aquatics = petInsight[3].amount


    return (
         
        <div>
            <h1>Your pets:</h1>
            <ul>
                <li value="🐱">🐱 {felines}</li>
                <li value="🐶">🐶 {canines}</li>
                <li value="🦖">🦖 {jurassics}</li>
                <li value="🐟">🐟 {aquatics}</li>
          </ul>
        </div>
          
    )
}
   



    

    

export default Petoverview;

