import React, { useState } from "react";

function DogForm() {

    const [name, setName] = useState("")
    const [breed, setBreed] = useState("")
    const [age, setAge] = useState("")

    const handleNameChange = (event) => setName(event.target.value)
    const handleBreedChange = (event) => setBreed(event.target.value)
    const handleAgeChange = (event) => setAge(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(name, breed, age)
        setName("")
        setBreed("")
        setAge("")
    }

    return (

        <form onSubmit={handleSubmit}>

            <label htmlFor="name">
                Name:
                <input 
                id="name" 
                type="text" 
                name="name" 
                onChange={handleNameChange} 
                value={name}
                />
            </label>

            <br/>

            <label htmlFor="breed">
                Breed:
                <input 
                id="breed" 
                type="text" 
                name="breed" 
                onChange={handleBreedChange} 
                value={breed}
                />
            </label>

            <br/>

            <label htmlFor="age">
                Age:
                <input 
                id="age" 
                type="text" 
                name="age" 
                onChange={handleAgeChange} 
                value={age}
                />
            </label>

            <br/>

            <button type="submit">Submit</button>

        </form>

    )

}

export default DogForm;

