import React from 'react'
import { useState } from "react";


export default function Buscador({data}) {
    const [search, setSearch] = useState("");
    let info = [];

    //Búsqueda de datos
    const handleSearch = (e) => {
        setSearch(e.target.value);
        };
        //Filtrado de datos

        if (!search) {
        info = {data};
        } else {
        info = {data}.filter((digi) =>
        digi.name.toLowerCase().includes(search.toLowerCase()) ||
        digi.level.toLowerCase().includes(search.toLowerCase())
        );
    
        }

    return (
		<>
        <div>
        <input
        type="text"
        placeholder="search digimon name or level"
        className="form-control"
        value={data}
        onChange={handleSearch}
        /></div>
    </>
	);
};