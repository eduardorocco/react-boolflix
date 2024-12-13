import Card from "../Card/Card"
import style from './ItemList.module.css'


export default function ItemList({ items = [], title }) {


    return (
        <>
            <div className={style.container}>
                {items.length > 0 && <h2>{title}</h2>}
                <div className={style.row}>
                    {items.map((item) => (
                        <div key={item.id} className={style.col_2}>
                            <Card
                                obj={item}
                            />
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}
