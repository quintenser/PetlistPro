import React, {useState} from 'react'
import Pet from './Pet';
import PetModule from './PetModule';
import Petoverview from './PetSummary';
import { petInsight } from './PetModule';

let cats: string | any[] = []
let dogs: string | any[] = []
let dinos: string | any[] = []
let fish: string | any[] = []

function Petlist() {
    const [pets, setPets] = useState<any>([])

    const addPet = (pet: any) => {
        if(!pet.name || /^\s*$/.test(pet.name)) {
            return
        }

        const newPets: string[] = [pet, ...pets]


        setPets(newPets)
    }

    const removePet = (id:number) => {
        const removeArray = [...pets].filter(pet => pet.id !== id)

        setPets(removeArray)
        console.log(setPets)
    }

    const editPet = (petId:number, newContent:any) => {
        if(!newContent.name || /^\s*$/.test(newContent.name)) {
            return
        }
        setPets((prev: { id: number; }[]) => prev.map((item: { id: number; }) => (item.id === petId ? newContent: item)))
    }


    
    const selectedPet = (id: number) => {
        let updatedPets = pets.map((pet: { id: any; }) => {
            if (pet.id === id) {
                pets.isSelected = !pets.isSelected;
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
        <div>
            <PetModule onSubmit={addPet}/>
            <Pet pets={pets} selectedPet={selectedPet} removePet={removePet} editPet={editPet}
            />
        </div>
    )    
}

export default Petlist;
