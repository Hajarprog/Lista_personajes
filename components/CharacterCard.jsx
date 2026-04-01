"use client"
import { useEffect, useState } from "react"
export default function CharacterCard({ name, status, species, image }) {

    return (

        <div className="grid grid-cols-3">

            <div className="">

                <img src={image} />
                <h2>{name}</h2>
                <p>{status}</p>
                <span>{species}</span>

            </div>
        </div>




    )
}