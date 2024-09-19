import { useEffect, useState } from "react";

export default function CardContact({ user }) {
    // const [data, setData] = useState({});
    // const user = 0;

    // const fetchNewUser = async () => {
    //     try {
    //         const response = await fetch("https://randomuser.me/api/");
    //         const data = await response.json();
    //         setData(data);
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    // useEffect(() => {
    //     fetchNewUser();
    // }, []);

    return (
        <>
            <h1 className="text-4xl font-mont text-text-light">Contact : {user.name.first}</h1>
            
            {/* <img src={data?.results[user].picture.medium} alt="" />
            {data?.results && data?.results[user] && ( <p className="text-2xl">Je suis {data?.results[user].name.first} {data?.results[user].name.last}</p>)}{data?.results && data?.results[user] && ( <p className="text-2xl">Vous pouvez me contacter au : {data?.results[user].phone}</p>)}
            {data?.results && data?.results[user] && ( <p className="text-2xl">Voici mon adresse mail : {data?.results[user].email}</p>)}
            {data?.results && data?.results[user] && ( <p className="text-2xl">Je suis né le : {data?.results[user].dob.date}</p>)}
            {data?.results && data?.results[user] && ( <p className="text-2xl">J'habite au : {data?.results[user].location.street.number} {data?.results[user].location.street.name}, {data?.results[user].location.country}</p>)} */}
            
        </>
    );
}