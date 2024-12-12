export default function Card({ obj }) {

    const { title, original_title, original_language, vote_average } = obj
    return (
        <>

            <ul>
                <li>{title}</li>
                <li>{original_title}</li>
                <li>{original_language}</li>
                <li>{vote_average}</li>
            </ul>

        </>

    )
}