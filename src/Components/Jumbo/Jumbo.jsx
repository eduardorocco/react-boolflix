import video from '../../assets/video/video-jumbo.mp4'
import style from './Jumbo.module.css'
import topGunLogo from '../../assets/logos/top-gun-maverick.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default function Jumbo() {
    return (
        <div className={style.container}>
            <video className={style.player} src={video} autoPlay={true} />
            <div className={style.player_container}>
                <img className={style.logo} src={topGunLogo} />
                <div className={style.button_container}>
                    <button className={style.button_play}>Riproduci <FontAwesomeIcon icon={faCirclePlay}/></button>
                    <button className={style.button_info}><FontAwesomeIcon icon={faCircleInfo}/> Altre info</button>
                </div>
            </div>
        </div>
    )
}