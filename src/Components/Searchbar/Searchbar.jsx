import { useState } from "react"

export default function Searchbar({ onSearch }) {
    const [query, setQuery] = useState('')

    const handleSearchInput = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(query)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchInput}
                    placeholder="Cerca un film..."
                />
                <input type="submit" />
            </form>
        </>
    )
}