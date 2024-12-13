import Card from "../Card/Card"
import GlobalContext from "../../Context/GlobalContext"
import { useContext } from "react"
import style from './Main.module.css'

export default function Main() {

    const { search } = useContext(GlobalContext)

    return (
        <div className={style.container}>
            <div className={style.row}>
                {search.map((movie) => (
                    <div key={movie.id} className={style.col_2}>
                        <Card
                            obj={movie}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
