import ItemList from "../ItemList/ItemList"
import GlobalContext from "../../Context/GlobalContext"
import { useContext } from "react"
import style from './Main.module.css'

export default function Main() {

    const { movies, series } = useContext(GlobalContext)

    return (
        <main className={style.main}>
            <ItemList title='Movies' items={movies} />
            <ItemList title='Series' items={series} />
        </main>
    )
}
