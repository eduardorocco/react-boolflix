import de from '../../assets/flags/de.png'
import en from '../../assets/flags/en.png'
import es from '../../assets/flags/es.png'
import fr from '../../assets/flags/fr.png'
import it from '../../assets/flags/it.png'
import style from './Card.module.css'
import placeHolder from '../../assets/placeholders/placeholder.webp'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as starSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as starRegular } from '@fortawesome/free-regular-svg-icons'

const IMAGE_URI = 'https://image.tmdb.org/t/p/'
const DEFAULT_IMAGE_SIZE = 'w342'


export default function Card({ obj }) {

    
    
    const {
        name,
        original_name,
        title, original_title,
        original_language,
        vote_average,
        poster_path,
        vote_count
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

    const getStars = (rating) => {
        const fullStars = Math.floor(rating / 2)
        const emptyStars = 5 - fullStars
        let stars = []

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FontAwesomeIcon key={`full-${i}`} icon={starSolid} />)
        }
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<FontAwesomeIcon key={`empty-${i}`} icon={starRegular} />)
        }

        return stars;
    }

    return (
        <div className={style.card}>

            <div className="card-title">
                <p>{title ? title : name}</p>
                <p>{original_title ? original_title : original_name}</p>
            </div>

            <div className="card-body">
                <div className='poster'>
                    <img src={poster_path ? `${IMAGE_URI}${DEFAULT_IMAGE_SIZE}${poster_path}` : placeHolder } alt="" />
                </div>
                <div className='vote'>{getStars(vote_average)}</div>
                <div className='vote-count'></div>
                <div className='lenguage'>{supportedLenguages.includes(original_language) ? (
                    <img src={getFlag(original_language)} alt="" />) : <div className={style.no_flag_leng}>{original_language}</div>}
                </div>
            </div>
        </div>
    )
}
