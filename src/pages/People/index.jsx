import style from "./index.module.scss";
import Layouts from '../../common/components/Layouts';
import visualBanner from "../../assets/images/people/people-visual-banner.png";
import ShapeImg from '../../common/components/ShapeImg';
import shapeImgItem from "../../assets/images/people/people-shape-img.png";
import ceoImg from "../../assets/images/people/ceo-img.png";
import useMemberList from "./member";
import { useTranslation } from "react-i18next";

function People () {
    const { t } = useTranslation();
    const memberList = useMemberList();
    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    <img alt="visual img" src={visualBanner} />
                    <p>{t('PEOPLE_BANNER')}</p>
                </div>

                <div className={style.flex_box}>
                    <div className={style.flex_item}>
                        <h3 className={style.title}>{t('PEOPLE_TITLE_1')}</h3>
                        <p>{t('PEOPLE_TITLE_1_TEXT')}</p>
                    </div>
                    <div className={style.flex_item}>
                        <h3 className={style.title}>{t('PEOPLE_TITLE_2')}</h3>
                        <p>{t('PEOPLE_TITLE_2_TEXT')}</p>
                    </div>
                    <div className={style.flex_item}>
                        <h3 className={style.title}>{t('PEOPLE_TITLE_3')}</h3>
                        <p>{t('PEOPLE_TITLE_3_TEXT')}</p>
                    </div>
                </div>

                <div className={style.shape_box}>
                    <ShapeImg imgSrc={shapeImgItem} subTitle={`OPEN COMMUNICATION,\nSTRONG RELATIONSHIPS`} />
                </div>

                <div className={style.members}>
                    <div className={style.ceo_intro}>
                        <img alt="ceo img" src={ceoImg} />
                        <div className={style.text_box}>
                            <div className={style.message}>
                                <h3>{t('PEOPLE_CEO_TITLE')}</h3>
                                <p>{t('PEOPLE_CEO_TEXT')}</p>
                            </div>
                            <span className={style.names}>
                                <b>{t('PEOPLE_CEO_NAME')}</b>
                                <p>{t('PEOPLE_CEO_CATEGORY')}</p>
                            </span>
                        </div>
                    </div>

                    <div className={style.member_list}>
                        <h3>{t('PEOPLE_MEMBER')}</h3>
                        <ul>
                            {memberList.map((item) => (
                                <li key={item.id}>
                                    <img alt="thumbnail" src={item.img} />
                                    <span>{item.name}</span>
                                    <p>{item.roll}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export default People;