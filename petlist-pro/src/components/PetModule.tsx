import React, {useState, useEffect, useRef} from 'react'
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
    let [species, setSpecies] = useState(props.edit ? props.edit.species : '')
    const focus = useRef<HTMLInputElement>(null)
    useEffect(() => {
      if (focus.current !== null) {
        focus.current.focus();
      }
    })
    const handleChange = (event: any) => {
      
      setInput(event.target.value);
    }

    const handleSelect = (event:any) => {
      setSpecies(event.target.value)
    }

    const handleSubmit = (event: any) => {
      if (!species) {
        species = 0;
      }
      petInsight[species].amount += 1
      Petoverview();
      event.preventDefault();
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        name: input,
        species: petInsight[species].symbol,
        age: Math.floor(Math.random() * 20)
      });
      setInput('')
    };

  return ( 
    <><div>
      <h1>Your pets:</h1>
      <ul>
        <li value="🐱">🐱 {petInsight[0].amount}</li>
        <li value="🐶">🐶 {petInsight[1].amount}</li>
        <li value="🦖">🦖 {petInsight[2].amount}</li>
        <li value="🐟">🐟 {petInsight[3].amount}</li>
      </ul>
    </div><form className="petModule" onSubmit={handleSubmit}>
        {props.edit ? (
          <>
            <input
              type="name"
              placeholder="Rename that pet!"
              value={input}
              name="name"
              className='petName'
              onChange={handleChange}
              ref={focus} />
            <select id="selection" className="petSpecies" name="species" value={species} onChange={handleSelect}>
              <option value="0">🐱</option>
              <option value="1">🐶</option>
              <option value="2">🦖</option>
              <option value="3">🐟</option>
            </select>
            <button className="pet-button ">Rename that Pet!</button>
          </>
        ) :
          (
            <>
              <input
                type="name"
                placeholder="Name that pet!"
                value={input}
                name="name"
                className='petName'
                onChange={handleChange}
                ref={focus} />

              <select id="selection" className="petSpecies" name="species" value={species} onChange={handleSelect}>
                <option value="0">🐱</option>
                <option value="1">🐶</option>
                <option value="2">🦖</option>
                <option value="3">🐟</option>
              </select>
              <button className="pet-button">add that Pet!</button>
            </>
          )}


      </form></>
  )
}





export default PetModule;
export { petInsight };