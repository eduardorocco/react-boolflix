import Searchbar from "../Searchbar/Searchbar";
import { useContext } from "react"
import GlobalContext from "../../Context/GlobalContext"
import style from './Header.module.css'

export default function Header() {

    const { handleSearch } = useContext(GlobalContext)

    return (
        <div className={style.header}>
            <div className={style.image}><img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" /></div>
            <div>Home</div>
            <div>Serie TV</div>
            <div>Film</div>
            <Searchbar onSearch={handleSearch} />
        </div>
    )
}