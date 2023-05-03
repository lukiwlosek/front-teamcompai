"use client"
import { useState } from "react"


export default function Search({champions}: any) {
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([]);

    function handleInputChange(event: any) {
        const value = event.target.value.toLowerCase();
        setSearch(value)
        if (value.length > 0) {

            const filteredResults = champions.filter((item: string) => {
                return item.toLowerCase().includes(value)
            })
            setResults(filteredResults)
        } else {
            setResults(champions)
        }
    }

    function handleResultClick(event: any, result: any) {
        event.preventDefault();
        setSearch(result);
        setResults([]);
    }


    return (
        <div> 
            <input className="enabled:hover:border-gray-400 disabled:opacity-75"
                value={search}
                onChange={handleInputChange} 
            />

            <div className="bg-white">
                {/* search box popup */}
                <ul>
                {results.map((item) => (
                    <li key={item} onClick={(event) => handleResultClick(event, item)}>
                        {item}
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}
