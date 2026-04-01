"use client"
import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
export default function CharacterList() {

    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        async function llamarApi() {
            try {
                const res = await fetch("https://rickandmortyapi.com/api/character")
                const data = await res.json();
                console.log(data.results)
                setPersonajes(data.results)
            } catch (error) {
                console.error(error)
            }
        };

        llamarApi()

    }, [])

    useEffect(() => console.log(personajes[0], [personajes]))

    return (

        <div className="">

            {personajes.map(personaje =>
                <div key={personaje.id} >
                    < CharacterCard
                        image={personaje.image}
                        name={personaje.name}
                        status={personaje.status}
                        species={personaje.species}
                    />
                </div>
            )

            }

        </div>

    );
}