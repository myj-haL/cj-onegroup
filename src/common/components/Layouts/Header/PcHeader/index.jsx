import { Link, useLocation } from "react-router-dom";
import style from "./index.module.scss";
import logo from "../../../../../assets/images/logo.svg";
import shapeIcon from "../../../../../assets/images/icon-shape.svg";
import logoFill from "../../../../../assets/images/logo-fill.svg";
import { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';

function PcHeader ({handleLnbOpen, isLnbOpen, lnbRef, handleLnbMouseLeave, handleLnbMouseEnter}) { 
  const { t, i18n } = useTranslation();

  const [langActive, setLangActive] = useState(1);
  const changeLanguage = (lng, index) => {
    i18n.changeLanguage(lng); // 언어 변경
    setLangActive(index);
  };

  const menuList = [
    {
      id:0,
      name:'ONE SPIRIT',
      location:'/about',
      twoDepthMenu:[
        {
          id:0,
          name2:t('HEADER_MENU_1_SUB_1'),
        },
        {
          id:1,
          name2:t('HEADER_MENU_1_SUB_2'),
        },
        {
          id:2,
          name2:t('HEADER_MENU_1_SUB_3'),
        },
        {
          id:3,
          name2:t('HEADER_MENU_1_SUB_4'),
        },
        {
          id:4,
          name2:t('HEADER_MENU_1_SUB_5'),
        },
        {
          id:5,
          name2:t('HEADER_MENU_1_SUB_6'),
        },
      ]
    },
    {
      id:1,
      name:'BRANCH',
      location:'/branch',
      twoDepthMenu:[
        {
          id:0,
          name2: t('HEADER_MENU_2_SUB_1'),
        },
        {
          id:1,
          name2:t('HEADER_MENU_2_SUB_4_SIMPLE'),
        },
        {
          id:2,
          name2:t('HEADER_MENU_2_SUB_3'),
        },
        {
          id:3,
          name2:t('HEADER_MENU_2_SUB_2'),
        },
        {
          id:4,
          name2:t('HEADER_MENU_2_SUB_5'),
        },
      ]
    },
    {
      id:2,
      name:'PEOPLE',
      location:'/people',
      twoDepthMenu:[
        {
          id:0,
          name2:'We Are',
        },
        {
          id:1,
          name2:t('HEADER_MENU_3_SUB_2'),
        },
        {
          id:2,
          name2:t('HEADER_MENU_3_SUB_3'),
        },
      ]
    },
  ]

  const location = useLocation();

  useEffect(() => {
    if (i18n.language === 'ko' && langActive !== 0) {
      setLangActive(0);
    } else if (i18n.language === 'en' && langActive !== 1) {
      setLangActive(1);
    }
  }, [i18n.language, langActive]);

  return (
    <div className={style.container}>
      <div className={style.inner}>
        {location.pathname === '/about' || location.pathname === '/people' ? 
        <Link to={'/'} className={style.logo}>
          <img alt="logo" src={logoFill} />
        </Link>
        : 
        <Link to={'/'} className={style.logo}>
          <img alt="logo" src={logo} />
        </Link>
        }
        

        <ul className={style.menu_list} onMouseEnter={handleLnbMouseEnter}>
          {menuList.map((item) => (
            <li key={item.id} >
              <Link to={item.location} className={`${location.pathname === item.location && style.border} ${location.pathname === '/about' || location.pathname === '/people' ? style.changeColor : ''}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={`${style.lnb} ${isLnbOpen === true ? style.show : ''}`} ref={lnbRef}  onMouseLeave={handleLnbMouseLeave}>
        <div className={style.lnb_inner} onClick={handleLnbOpen}>
          <Link to={'/'} className={style.logo}>
            <img alt="logo" src={logoFill} />
          </Link>

          <div className={style.lnb_right}>
            <img alt="shape icon" src={shapeIcon} className={style.shape_icon} />

            <div className={style.right_menu}>
              <ul className={style.menu_list}>
                {menuList.map((item) => (
                  <li key={item.id}>
                    <Link to={item.location} className={location.pathname === item.location ? style.border : ''}>{item.name}</Link>
                    <ul className={style.depth_menu}>
                      {item.twoDepthMenu.map((item2) => (
                        <li key={item2.id}>
                          <Link to={item.location} style={{fontWeight: langActive === 0 ? '500' : '400' }}>
                            {item2.name2}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>

              <div className={style.language}>
                <button type="button" onClick={(e) => {
                  e.stopPropagation();
                  changeLanguage('ko', 0)
                }} className={langActive === 0 ? style.active : ''}>KR</button> 
                / 
                <button type="button" onClick={(e) => {
                  e.stopPropagation();
                  changeLanguage('en', 1)
                  }} className={langActive === 1 ? style.active : ''}>EN</button>
              </div>
            </div>
          </div>
        </div>
        <p className={style.lnb_foot}>
          Stories in Every Flavor, <br />
          Memories in Every Bite
        </p>
      </div>
    </div>
  )
}

export default PcHeader;