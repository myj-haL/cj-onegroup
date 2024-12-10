import style from "./index.module.scss";
import Layouts from "../../common/components/Layouts";
import Slides from "./Slides";
import section2Mobile from "../../assets/images/main/main-essence-bg-mobile.png";
import section2Pc from "../../assets/images/main/main-essence-bg-pc.png";
import Lookbook from "./Lookbook";
import bottomImg1 from "../../assets/images/main/bottom-img-1.png";
import bottomImg2 from "../../assets/images/main/bottom-img-2.png";
import bottomImg3 from "../../assets/images/main/bottom-img-3.png";
import { ParallaxProvider, useParallax } from 'react-scroll-parallax';
import useResponsive from "../../common/hook/Responsive";
import { useEffect, useState } from "react";
import shapeImg from "../../assets/images/main/main-visual-shape.png";
import shapeInnerImg from "../../assets/images/main/main-visual-img-inner.png";
import shapeImgMobile from "../../assets/images/main/shape-img-mobile.png";
import logoText from "../../assets/images/logo-text.svg";
import { Link } from "react-router-dom";
import logoTextGreen from "../../assets/images/logo-text-green.svg";
import { useTranslation } from "react-i18next";

function Main () {
  const innerWidth = useResponsive();
  const [parallaxSpeed, setParallaxSpeed] = useState();
  const [parallaxSpeed2, setParallaxSpeed2] = useState();
  const { t, i18n } = useTranslation();


  useEffect(() => {
    if(innerWidth >= 1024) {
      setParallaxSpeed(-13);
      setParallaxSpeed2(-8);
    } else {
      setParallaxSpeed(-3);
      setParallaxSpeed2(-4);
    }
  }, [innerWidth])

  const parallax = useParallax({
    speed:parallaxSpeed,
  });

  const parallax2 = useParallax({
    speed:parallaxSpeed2,
  });

  return (
    <Layouts>
      <ParallaxProvider>
        <div className={style.container}>
          <section className={style.first_section}>
            {innerWidth < 1024 && <img alt="logo text" className={style.text_logo} src={logoText} />}
            
            <div className={style.banner_text}>
            {innerWidth >= 1024 && <img alt="logo text" src={logoTextGreen} /> }
              <p>{innerWidth >=1024 ? `${t('MAIN_TOP_TEXT')}` : `${t('MAIN_TOP_TEXT_MOBILE')}`}</p>
              {innerWidth >= 1024 && <Link to={'/branch#contact_section'} style={{marginTop:i18n.language === 'ko' ? '79px' : '142px' }} className={style.moving_link}>{t('CONTACT_US_BTN')}</Link>}
            </div>
            <div className={style.shape_wrap}>
              <img alt="shape" src={innerWidth >=1024 ? shapeImg : shapeImgMobile} className={style.shape_img} />
              <img alt="shape inner" src={shapeInnerImg} className={style.inner_img} ref={parallax.ref} />
            </div>
            {innerWidth < 1024 && <Link to={'/branch#contact_section'} className={style.moving_link}>{t('CONTACT_US_BTN')}</Link>}
          </section>
          <div className={style.vision}>
            <h3 className={style.title}>{t('MAIN_VISION')}</h3>
            <div className={style.vision_text}>
              <p>{t('MAIN_VISION_TEXT')}</p>
            </div>
          </div>

          <Slides />
          <section className={style.second_section}>
            <div className={style.parallax_wrap}>
              <img alt="section bg" src={innerWidth >= 800 ? section2Pc : section2Mobile} ref={parallax2.ref} />
            </div>
            <div className={style.text_box} >
              <h3 className={style.title}>{t('MAIN_ESSENCE')}</h3>
              <p>{t('MAIN_ESSENCE_TEXT')}</p>
            </div>
          </section>

          <Lookbook />
          <section className={style.end_section}>
            <div className={style.img_wrap}>
              <img alt="bottom img 1" src={bottomImg1} />
              <img alt="bottom img 2" src={bottomImg2} />
              <img alt="bottom img 3" src={bottomImg3} />
            </div>
            <div className={style.end_section_text}>
              <h3>The Essence Of Korean Cuisine</h3>
              <p>{t('MAIN_BOTTOM_TEXT')}</p>
            </div>
          </section>
        </div>
      </ParallaxProvider>
    </Layouts>
  )
}

export default Main;