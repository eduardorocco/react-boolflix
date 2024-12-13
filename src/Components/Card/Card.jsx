import de from '../../assets/flags/de.png'
import en from '../../assets/flags/en.png'
import es from '../../assets/flags/es.png'
import fr from '../../assets/flags/fr.png'
import it from '../../assets/flags/it.png'
import style from './Card.module.css'

export default function Card({ obj }) {

    const {
        name,
        original_name,
        title, original_title,
        original_language,
        vote_average,
        poster_path
    } = obj

    const supportedLenguages = ['de', 'en', 'es', 'fr', 'it']

    const getFlag = (leng) => {
        switch (leng) {
            case 'de':
                return de
            case 'en':
                return en
            case 'es':
                return es
            case 'fr':
                return fr
            case 'it':
                return it
            default:
                return leng
        }
    }
    return (
        <div className="card">
            <div className="card-title">
                <p></p>
                <p></p>
            </div>
            <div className="card-body">

            </div>
        </div>
    )
}

           {/* <ul>
                <li>{title ? title : name}</li>
                <li>{original_title ? original_title : original_name}</li>
                <li>
                    {supportedLenguages.includes(original_language) ? (
                        <img src={getFlag(original_language)} alt="" />) : <div>{original_language}</div>}
                </li>
                <li>{vote_average}</li>
            </ul> */}