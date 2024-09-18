import { useEffect } from "react";

export default function App() {

    const fetchNexAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        console.log(data);
    };

    useEffect(() => {
        fetchNexAdvice();
    }, []);
    
    return <></>
}