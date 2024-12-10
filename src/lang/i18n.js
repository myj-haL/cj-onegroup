import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from "./en";
import ko from "./ko";

const resources = {
    en: { translation: en },
    ko: { translation: ko }
} 

// i18n 초기화
i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // 기본 언어 설정
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;