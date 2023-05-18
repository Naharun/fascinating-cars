import { useEffect, useState } from "react";
import ForAllToys from "../ForAllToys/ForAllToys";

const AllToys = () => {
    const [allToys, setallToys] = useState([]);
    useEffect(() =>{
        fetch('toy.json')
        .then(res => res.json())
        .then(data => setallToys(data))
    },[])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allToys.map(allToy =><ForAllToys key={allToy.id} allToy={allToy}></ForAllToys>)
            }
        </div>
    );
};

export default AllToys;