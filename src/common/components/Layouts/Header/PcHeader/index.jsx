import { Link, useLocation } from "react-router-dom";
import style from "./index.module.scss";
import logo from "../../../../../assets/images/logo.svg";
import shapeIcon from "../../../../../assets/images/icon-shape.svg";
import logoFill from "../../../../../assets/images/logo-fill.svg";
import { useTranslation } from 'react-i18next';
import LanguageBtn from "../../../LanguageBtn";

function PcHeader ({handleLnbOpen, isLnbOpen, lnbRef}) { 
  const { t, i18n } = useTranslation();

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

  return (
    <div className={style.container}>
      <div className={style.inner}>
        <div className={style.left}>
          {location.pathname === '/about' || location.pathname === '/people' ? 
          <Link to="/" className={style.logo}>
            <img alt="logo" src={logoFill} />
          </Link>
          : 
          <a href="/" className={style.logo}>
            <img alt="logo" src={logo} />
          </a>
          }

          <LanguageBtn />
        </div>
        

        <ul className={style.menu_list} onClick={handleLnbOpen}>
          {menuList.map((item) => (
            <li key={item.id} >
              <Link to={item.location} className={`${location.pathname === item.location && style.border} ${location.pathname === '/about' || location.pathname === '/people' ? style.changeColor : ''}`}>{item.name}</Link>
            </li>
          ))}
        </ul>
        
        <div className={`${style.lnb} ${isLnbOpen === true ? style.show : ''}`} ref={lnbRef}>
          <div className={style.lnb_inner} onClick={handleLnbOpen}>
            <div className={style.left}>
              <Link to="/" className={style.logo}>
                <img alt="logo" src={logoFill} />
              </Link>

              <LanguageBtn addClass={'lnb'} />
            </div>

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
                            <Link to={item.location} style={{fontWeight: i18n.language === 'ko' ? '500' : '400' }}>
                              {item2.name2}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                
              </div>
            </div>
          </div>
          <p className={style.lnb_foot}>
            Stories in Every Flavor, <br />
            Memories in Every Bite
          </p>
        </div>
      </div>

    </div>
  )
}

export default PcHeader;