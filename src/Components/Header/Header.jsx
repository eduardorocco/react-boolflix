import Searchbar from "../Searchbar/Searchbar";
import { useContext } from "react"
import GlobalContext from "../../Context/GlobalContext"

export default function Header() {

    const { handleSearch } = useContext(GlobalContext)

    return(
        <>
            <div>logo</div>
            <Searchbar onSearch={handleSearch} />
        </>
    )
}