import Card from "../Card/Card"
import GlobalContext from "../../Context/GlobalContext"
import { useContext } from "react"

export default function Main() {

    const { search } = useContext(GlobalContext)

    return (
        <>
            {search.map((movie) => (
                <Card
                    key={movie.id}
                    obj={movie}
                />
            ))}
        </>

    )
}