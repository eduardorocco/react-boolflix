import Searchbar from "../Components/Searchbar/Searchbar"
import Card from "../Components/Card/Card"
import GlobalContext from "../Context/GlobalContext"
import { useContext } from "react"

export default function Main() {

    const { handleSearch, search } = useContext(GlobalContext)

    return (
        <>
            <Searchbar onSearch={handleSearch} />
            {search.map((movie) => (
                <Card
                    key={movie.id}
                    obj={movie}
                />
            ))}
        </>

    )
}