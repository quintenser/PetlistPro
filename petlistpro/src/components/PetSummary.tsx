import React, {useState} from 'react'
import { petInsight } from './PetModule'



function Petoverview() {
    return (
        <div>
            <h1>Your Pets:</h1>
              <ul>
                <li value="🐱">🐱 {petInsight[0].amount}</li>
                <li value="🐶">🐶 {petInsight[1].amount}</li>
                <li value="🦖">🦖 {petInsight[2].amount}</li>
                <li value="🐟">🐟 {petInsight[3].amount}</li>
              </ul>
        </div>
          
    )
}
   



    

    

export default Petoverview;

