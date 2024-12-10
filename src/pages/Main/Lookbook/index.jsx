import style from "./index.module.scss";
import { useTranslation } from 'react-i18next';

function Lookbook () {
    const { t } = useTranslation();
    const loobookList = [
        {
            id:0,
            number:'7',
            title : t('MAIN_LOOKBOOK_1_TITLE'),
            subTitle : t('MAIN_LOOKBOOK_1_TEXT')
        },
        {
            id:1,
            number:'2015',
            title : t('MAIN_LOOKBOOK_2_TITLE'),
            subTitle : t('MAIN_LOOKBOOK_2_TEXT')
        },
        {
            id:2,
            number:'200+',
            title : t('MAIN_LOOKBOOK_3_TITLE'),
            subTitle : t('MAIN_LOOKBOOK_3_TEXT')
        },
        {
            id:3,
            number:'80',
            title : t('MAIN_LOOKBOOK_4_TITLE'),
            subTitle : t('MAIN_LOOKBOOK_4_TEXT')
        }
    ]

    return (
        <div className={style.container}>
            <h3 className={style.title}>LOOKBOOK</h3>
            <ul className={style.lookbook_list}>
                {loobookList.map((item) => (
                    <li key={item.id}>
                        <p>{item.number}</p>
                        <div className={style.right}>
                            <span>{item.title}</span>
                            <p>{item.subTitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Lookbook;