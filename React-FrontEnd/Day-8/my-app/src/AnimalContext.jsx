import React, { createContext, useState} from "react";

// Create a context
const AnimalContext = createContext();

// Create a component that will provide the context

function AnimalProvider({ children }) {
    const [animalSound, setAnimalSound] = useState('Meow');
    const [age, setAge] = useState("32");

    return(
        <AnimalContext.Provider 
        value={{animalSound, setAnimalSound, age, setAge}}>
            {children}
        </AnimalContext.Provider>
    )
}

// Export the context and provider
export { AnimalContext, AnimalProvider }