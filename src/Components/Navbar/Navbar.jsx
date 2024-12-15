import Searchbar from "../Searchbar/Searchbar";
import { useContext } from "react"
import GlobalContext from "../../Context/GlobalContext"
import style from './Navbar.module.css'
import { NavLink } from "react-router-dom";

export default function Header() {

    const { handleSearch } = useContext(GlobalContext)

    return (
        <div className={style.navbar}>
            <NavLink to='/'>
                <div className={`${style.image} ${style.z_index}`}>
                    <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
                </div>
            </NavLink>
            <div className={style.a_pages}>
            <NavLink className={style.z_index} to='/'>
                Home
            </NavLink>
            <NavLink className={style.z_index} to='/series'>
                Serie TV
            </NavLink>
            <NavLink className={style.z_index} to='/movies'>
                Film
            </NavLink>
            </div>
            <Searchbar onSearch={handleSearch} />

        </div>
    )
}



{/* <div className={style.image}>
<img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="" />
</div>
<div>Home</div>
<div>Serie TV</div>
<div>Film</div>
<Searchbar onSearch={handleSearch} /> */}