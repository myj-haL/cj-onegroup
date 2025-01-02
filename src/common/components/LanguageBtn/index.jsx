import { useEffect, useState } from "react";
import style from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

function LanguageBtn ({addClass}) {
  const { i18n } = useTranslation();
  const location = useLocation();

  const [langActive, setLangActive] = useState(1);
  const changeLanguage = (lng, index) => {
    i18n.changeLanguage(lng); // 언어 변경
    setLangActive(index);
  };

  useEffect(() => {
    if (i18n.language === 'ko' && langActive !== 0) {
      setLangActive(0);
    } else if (i18n.language === 'en' && langActive !== 1) {
      setLangActive(1);
    }
  }, [i18n.language, langActive]);

  return (
    <div className={`${style.language} ${location.pathname === '/about' || location.pathname === '/people' ? style.changeColor : ''} ${addClass ? style.lnb : ''}`}>
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
  )
}

export default LanguageBtn;