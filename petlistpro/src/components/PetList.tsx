import React, {useState} from 'react'
import Pet from './Pet';
import PetModule from './PetModule';
import { petInsight } from './PetModule';
import '../App.css';


function Petlist() {
    let cats: string | any[] = []
    let dogs: string | any[] = []
    let dinos: string | any[] = []
    let fish: string | any[] = []
    let errors= ""

    const [pets, setPets] = useState<any>([])
    const [errorBox, setError] = useState('');

    const addPet = (pet: any) => {
        if(!pet.name || /^\s*$/.test(pet.name)) {
            errors = "Please name your pet!"
            setError(errors)
            return
        }
        if(!pet.age || /^\s*$/.test(pet.age)) {
            errors = "Please give your pet an age!"
            setError(errors)
            return
        }
        setError(errors)
        const newPets: string[] = [pet, ...pets]


        setPets(newPets)
    }

    const removePet = (id:number) => {
        const removeArray = [...pets].filter(pet => pet.id !== id)

        setPets(removeArray)
    }

    const editPet = (petId:number, newContent:any) => {
        if(!newContent.name || /^\s*$/.test(newContent.name)) {
            return
        }
        
        setPets((prev: { id: number; }[]) => prev.map((item: { id: number; }) => (item.id === petId ? newContent: item)))
        
    }

    const selectedPet = (id: number) => {
        let updatedPets = pets.map((pet:any) => {
            if (pet.id === id) {
                pet.isSelected = !pet.isSelected;
            }
            return pet;
        })
        setPets(updatedPets)
    }

    cats = [...pets].filter(pet => pet.kind == '🐱');
    dogs = [...pets].filter(pet => pet.kind == '🐶');
    dinos = [...pets].filter(pet => pet.kind == '🦖');
    fish = [...pets].filter(pet => pet.kind == '🐟');

    petInsight[0].amount = cats.length
    petInsight[1].amount = dogs.length
    petInsight[2].amount = dinos.length
    petInsight[3].amount = fish.length

    return (
        <div >
            <PetModule onSubmit={addPet}/>
            <h2 className='messageBox'> {errorBox} ‎</h2>
            <div className='listContainer'>
            <Pet  pets={pets} selectedPet={selectedPet} removePet={removePet} editPet={editPet}/>
            </div>
        </div>
    )    
}

export default Petlist;
