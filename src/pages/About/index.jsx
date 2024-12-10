import style from "./index.module.scss";
import Layouts from '../../common/components/Layouts';
// import visualImg from "../../assets/images/about/visual-banner-mobile.png";
// import visualImgPc from "../../assets/images/about/visual-banner-pc.png";
import useResponsive from "../../common/hook/Responsive";
import visualImgTest from "../../assets/images/about/about-visual-banner.png";
import missionImg1 from "../../assets/images/about/mission-img-1.png";
import missionImg2 from "../../assets/images/about/mission-img-2.png";
import missionImg2Mobile from "../../assets/images/about/mission-img-2-mobile.png";
import guidelineMobile from "../../assets/images/about/logo-guideline-mobile.png";
import guidelinePc from "../../assets/images/about/logo-guideline-pc.png";
import lineBannerMobile from "../../assets/images/about/line-banner-mobile.png";
import lineBannerPc from "../../assets/images/about/line-banner-pc.png";
import taglineImg1 from "../../assets/images/about/tagline-img-1.png";
import taglineImg2 from "../../assets/images/about/tagline-img-2.png";
import taglineImg3 from "../../assets/images/about/tagline-img-3.png";
import storyBg from "../../assets/images/about/story-bg.png";
import storyBgMobile from "../../assets/images/about/story-bg-mobile.png";
import cLogo1 from "../../assets/images/about/c-logo-1.svg";
import cLogo2 from "../../assets/images/about/c-logo-2.svg";
import cLogo3 from "../../assets/images/about/c-logo-3.svg";
import cLogo4 from "../../assets/images/about/c-logo-4.svg";
import cLogo5 from "../../assets/images/about/c-logo-5.svg";
import cLogo6 from "../../assets/images/about/c-logo-6.svg";
import sloganImg from "../../assets/images/about/slogan-img.png";
import ShapeImg from "../../common/components/ShapeImg";
import { useTranslation } from "react-i18next";
import missionImg2Kr from "../../assets/images/about/mission-img-2-kr.png";
import missionImg2KrMobile from "../../assets/images/about/mission-img-2-mobile-kr.png";
import guidelinePcKr from "../../assets/images/about/logo-guideline-pc-kr.png";
import guidelineMobileKr from "../../assets/images/about/logo-guideline-mobile-kr.png";

function About () {
    const { t, i18n } = useTranslation();
    const innerWidth = useResponsive();
    const bannerTextList = [
        {
            id:0,
            title:'True',
            explain:t('ABOUT_BANNER_SUB_TEXT_1')
        },
        {
            id:1,
            title:'Consistent',
            explain:t('ABOUT_BANNER_SUB_TEXT_2')
        },
        {
            id:2,
            title:'Empathetic',
            explain:t('ABOUT_BANNER_SUB_TEXT_3')
        }
    ]

    const commentsList = [
        {
            id:0,
            img:cLogo1,
            title:t('ABOUT_ONE_VALUE_1'),
            explain:t('ABOUT_ONE_VALUE_1_TEXT')
        },
        {
            id:1,
            img:cLogo2,
            title:t('ABOUT_ONE_VALUE_2'),
            explain:t('ABOUT_ONE_VALUE_2_TEXT')
        },
        {
            id:2,
            img:cLogo3,
            title:t('ABOUT_ONE_VALUE_3'),
            explain:t('ABOUT_ONE_VALUE_3_TEXT')
        },
        {
            id:3,
            img:cLogo4,
            title:t('ABOUT_ONE_VALUE_4'),
            explain:t('ABOUT_ONE_VALUE_4_TEXT')
        },
        {
            id:4,
            img:cLogo5,
            title:t('ABOUT_ONE_VALUE_5'),
            explain:t('ABOUT_ONE_VALUE_5_TEXT')
        },
        {
            id:5,
            img:cLogo6,
            title:t('ABOUT_ONE_VALUE_6'),
            explain:t('ABOUT_ONE_VALUE_6_TEXT')
        }
    ]

    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    {/* <img alt="visual img" src={innerWidth >= 1024 ? visualImgPc : visualImg} /> */}
                    <img alt="visual img" src={visualImgTest} />
                    <div className={style.text_box}>
                        {bannerTextList.map((item) => (
                            <div className={style.item} key={item.id}>
                                <h3 className={style.title}>{item.title}</h3>
                                <p>{item.explain}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={style.mission_section}>
                    <h3 className={style.title}>{t('ABOUT_MISSION')}</h3>
                    <p className={style.sub}>{t('ABOUT_MISSION_TEXT')}</p>
                    <div className={style.flex_box}>
                        <img alt="mission img 1" src={missionImg1} />
                        <img alt="mission img 2" src={innerWidth >= 1024 ? (i18n.language === 'ko' ? missionImg2Kr : missionImg2) : (i18n.language === 'ko' ? missionImg2KrMobile : missionImg2Mobile)} />
                    </div>
                </div>
                <div className={style.guide_line}>
                    <img alt="logo guide line img" src={innerWidth >= 1024 ? (i18n.language === 'ko' ? guidelinePcKr : guidelinePc) : (i18n.language === 'ko' ? guidelineMobileKr : guidelineMobile)} />
                </div>

                <img style={{width:'100%', display:'block', maxHeight:'1000px', objectFit:'cover'}} alt="line banner" src={innerWidth >= 1024 ? lineBannerPc:lineBannerMobile} />

                <div className={style.tagline_section}>
                    <div className={style.img_wrap}>
                        <span>
                            <p>{t('ABOUT_TAGLINE')}</p>
                            <img alt="tagline img 1" src={taglineImg1} />
                        </span>
                        <span>
                            <p>Stories In<br/>Every Flavor,</p>
                            <img alt="tagline img 2" src={taglineImg2} />
                        </span>
                        <span>
                            <p>Memories In<br/>Every Bite</p>
                            <img alt="tagline img 3" src={taglineImg3} />
                        </span>
                    </div>
                    <h3 className={style.title}>{t('ABOUT_TAGLINE')}</h3>
                    <p>Stories in Every Flavor,<br />Memories in Every Bite</p>
                </div>

                <div className={style.story_section}>
                    <img alt="brand story bg" src={innerWidth >= 800 ? storyBg : storyBgMobile} />
                    <div className={style.text_box}>
                        <h3 className={style.title}>{t('ABOUT_BRAND_STORY')}</h3>
                        <div className={style.flex_box}>
                            <h3 className={style.title2}>{t('ABOUT_ONE_SPIRIT')}</h3>
                            <p>{t('ABOUT_ONE_SPIRIT_TEXT')}</p>
                        </div>
                    </div>
                </div>

                <div className={style.comments_section}>
                    <div className={style.inner}>
                        {commentsList.map((item) => (
                            <div className={style.comments_item} key={item.id}>
                                <img alt="c logo" src={item.img} />
                                <h3 className={style.title}><b>ONE</b>{i18n.language === 'ko' ? "" : " "}{item.title}</h3>
                                <p>{item.explain}</p>
                            </div>
                        ))}
                    </div>
                </div>
               
               <ShapeImg imgSrc={sloganImg} title={t('ABOUT_SLOGAN')} subTitle={`True Flavors Stay\nIn Your Memory`} />
            </div>
        </Layouts>
    )
}

export default About;