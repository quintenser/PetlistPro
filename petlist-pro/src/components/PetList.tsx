import React, {useState} from 'react'
import Pet from './Pet';
import PetModule from './PetModule';
import Petoverview from './PetSummary';
import { petInsight } from './PetModule';

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

    }

    const editPet = (petId:number, newContent:any) => {
        if(!newContent.name || /^\s*$/.test(newContent.name)) {
            return
        }
        setPets((prev: { id: number; }[]) => prev.map((item: { id: number; }) => (item.id === petId ? newContent: item)))
        console.log(newContent)
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

    return (
        <div>
            <PetModule onSubmit={addPet}/>
            <Pet pets={pets} selectedPet={selectedPet} removePet={removePet} editPet={editPet}
            />
        </div>
    )    
}

export default Petlist;
