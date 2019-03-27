import React from "react";


const Avatar = ({image, firstName, lastName}) => (
    <div>
        <h1>{firstName} {lastName.toUpperCase()}</h1>
        <img src={image} alt="image"/>
    </div>
);
export default Avatar;


// const Avatar = props => {
//     return <div>
//         <h3>{props.firstName}</h3>
//         <h3>{props.lastName}</h3>
//         <img src={props.image} alt=""/>
//     </div>
// };