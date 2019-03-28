import React from "react";
import Travel from "./Travel";

const travels = [
    {
    id : 1,
    country:"Vietnam",
    destination:"ASIA",
    distance:"10067km",
    image:"https://image.noelshack.com/fichiers/2019/13/1/1553517155-vietnam.jpg"
    },
    {
    id : 2,
    destination:"Central America",
    country:"Costa Rica",
    distance:"8912 km",
    image:"https://image.noelshack.com/fichiers/2019/13/1/1553517150-costarica.jpg"
    },
    {
    id : 3,
    destination:"ASIA",
    country:"Vietnam",
    distance:"10067km",
    image:"https://image.noelshack.com/fichiers/2019/13/1/1553517155-vietnam.jpg"
    },
    {
    id : 4,
    destination:"Central America",
    country:"Costa Rica",
    distance:"8912 km",
    image:"https://image.noelshack.com/fichiers/2019/13/1/1553517150-costarica.jpg"
    },
    {
    id : 5,
    destination:"ASIA",
    country:"Vietnam",
    distance:"10067km",
    image:"https://image.noelshack.com/fichiers/2019/13/1/1553517155-vietnam.jpg"
    }
];

// Sans le spread opérator :

// const Travels = () => (
//     <div>
//       {travels.map(travel, id => (
//         <Travel destination={travel.destination} image={travel.image} character={travel.character} key={id}/>
//             ))}
//     </div>
//   );

const Travels = () => (
<div>
    {travels.map((travel, id) => 
        <Travel {...travel} key={id} />
    )}
</div>
);



export default Travels;