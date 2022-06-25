import React, {useState, useEffect, useRef} from 'react'
import { BsPlusLg } from 'react-icons/bs'
import { AiOutlineTag } from 'react-icons/ai'
import Petoverview from './PetSummary'
const petInsight = [
  { species: "feline",
    amount: 0,
    symbol: '🐱'},
  { species: "canine",
    amount: 0,
    symbol: '🐶'},
  { species: "jurassic",
    amount: 0,
    symbol: '🦖'},
  { species: "aquatic",
    amount: 0,
    symbol: '🐟'},
  ]

function PetModule(props: any) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '')
    const [ageInput, setAgeInput] = useState(props.edit ? props.edit.age: '' )
    let [species, setSpecies] = useState(props.edit ? props.edit.kind : '')
    
    const handleChange = (event: any) => {
      setInput(event.target.value);
    }
    const handleAge = (event: any) => {
      setAgeInput(event.target.value);
      console.log(props.edit)
    }

    const handleSelect = (event:any) => {
      setSpecies(event.target.value)
    }

    const handleSubmit = (event: any) => {
      event.preventDefault();
      if (!species) {
        species = 0;
      }
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        name: input,
        kind: petInsight[species].symbol,
        age: ageInput,
        species: species
      });
      setInput('')
      setAgeInput('')
    };

  return ( 
    <form className="petModule" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="name"
              placeholder="Rename that pet!"
              value={input}
              name="name"
              className='petName'
              onChange={handleChange} />
              <input
              type="age"
              placeholder="Age"
              value={ageInput}
              name="age"
              className='petAge'
              onChange={handleAge} />
            <select id="selection" className="petSpecies" name="species" value={species} onChange={handleSelect}>
                <option value="0">{petInsight[0].symbol}</option>
                <option value="1">{petInsight[1].symbol}</option>
                <option value="2">{petInsight[2].symbol}</option>
                <option value="3">{petInsight[3].symbol}</option>
            </select>
            <button className="pet-button "><AiOutlineTag/></button>
          </>
        ) : (
            <>
            <h1>Your Pets:</h1>
              <ul>
                <li value="🐱">🐱 {petInsight[0].amount}</li>
                <li value="🐶">🐶 {petInsight[1].amount}</li>
                <li value="🦖">🦖 {petInsight[2].amount}</li>
                <li value="🐟">🐟 {petInsight[3].amount}</li>
              </ul>
              <input
                type="name"
                placeholder="Name that pet!"
                value={input}
                name="name"
                className='petName'
                onChange={handleChange} />
              <input
                type="age"
                placeholder="Age"
                value={ageInput}
                name="age"
                className='petAge'
                onChange={handleAge} />

              <select id="selection" className="petSpecies" name="species" value={species} onChange={handleSelect}>
                <option value="0">{petInsight[0].symbol}</option>
                <option value="1">{petInsight[1].symbol}</option>
                <option value="2">{petInsight[2].symbol}</option>
                <option value="3">{petInsight[3].symbol}</option>
              </select>
              <button className="pet-button"><BsPlusLg/></button>
            </>
          )}


      </form>
  )
}





export default PetModule;
export { petInsight };