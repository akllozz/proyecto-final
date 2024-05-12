import {useState, useEffect} from "react";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Buscador from "./Buscador.jsx";

export default function MiApi() {

    const [digimon, setDigimon] = useState([]);

    //Consumo de API
    const url = "https://digimon-api.vercel.app/api/digimon";
    const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setDigimon(data);

    //método de ordenado
    data.sort(function (a, b) {
        return a.name.localeCompare(b.name);
    })
    };

    useEffect(() => {
    getData();
    }, []);

    //Búsqueda de datos
    const [search, setSearch] = useState("");
    let results = [];

    //Búsqueda de datos
    const handleSearch = (e) => {
        setSearch(e.target.value);
        };
        //Filtrado de datos

        if (!search) {
        results = digimon;
        } else {
        results = digimon.filter((digi) =>
        digi.name.toLowerCase().includes(search.toLowerCase()) ||
        digi.level.toLowerCase().includes(search.toLowerCase())
        );
    
        }
    

    return (
        <div> 
        <input
        type="text"
        placeholder="Search digimon's name or level"
        className="form-control buscador"
        value={search}
        onChange={handleSearch}
        /> 
        <h1 className='text-center' >Digimon List</h1>
        <div className="flexcards">
        {results.map((digi) => (
        <Card>
        <Card.Img variant="top" src={digi.img} />
         <Card.Body>
        <Card.Text>
          <p><span className="lvl">Name:</span> {digi.name}
          <br></br>
          <span className="lvl">Level:</span> {digi.level}</p>
        </Card.Text>
      </Card.Body>
    </Card>        
))}
        </div>
</div>);
}