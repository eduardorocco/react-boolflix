import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import style from './Searchbar.module.css'
export default function Searchbar({ onSearch }) {
    
    const [query, setQuery] = useState('')

    const handleSearchInput = (event) => {
        setQuery(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onSearch(query)
        setQuery('')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={query}
                    onChange={handleSearchInput}
                    placeholder="Cerca un film o serie tv..."
                    className={style.input}
                />
                <button className={style.button} type="submit">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </>
    )
}