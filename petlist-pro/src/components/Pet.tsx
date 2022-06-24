import React, {useState} from 'react'
import PetModule from './PetModule';
import { FaSkullCrossbones } from 'react-icons/fa'
import { AiOutlineTag } from 'react-icons/ai'



function Pet({ pets, selectedPet, removePet, editPet }:any) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
        species: ''
    })

    const submitEdit = (value: any) => {
        editPet(edit.id, value)
        setEdit({
            id:null,
            value: '',
            species: ''
        })
    }

    if (edit.id) {
        return <PetModule edit={edit} onSubmit={submitEdit} />
    }
    return pets.map((pet:any, index:any) => (
        <div 
        className={pet.isSelected ? 'pet-row selected' : 'pet-row'} 
        key={index}>
            <div key={pet.id} onClick={() => selectedPet(pet.id)}>
            {pet.name} {pet.age} {pet.species}
            </div>
            <div className="icons">
                <AiOutlineTag
                onClick={() => setEdit({id: pet.id, value: pet.name, species: pet.species})}
                className='edit-icon'
                />
                <FaSkullCrossbones
                onClick={() => removePet(pet.id)}
                className='delete-icon'
                />
            </div>
            </div>
            
    ))
}

export default Pet;