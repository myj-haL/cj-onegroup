import Layouts from "../../common/components/Layouts";
import style from "./index.module.scss";
import visualBanner from "../../assets/images/branch/branch-visual-banner.png";
import useBranchData from "./data";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import emailjs from 'emailjs-com';
import { useLocation } from "react-router-dom";
import MailSendPopup from "../../common/components/MailSendPopup";

function Branch () {
    const { t } = useTranslation();
    const branchDatas = useBranchData();
    const scrollRef = useRef([]);
    const contactScrollRef = useRef();
    const [popupType, setPopupType] = useState(null);
    //각 지점 영역으로 스크롤 이동
    const scrollToSection = (index) => {
        scrollRef.current[index].scrollIntoView({ behavior: 'smooth' });
    };

    //하단 컨택폼에 스크롤 이동
    const contactScrollTo = () => {
        contactScrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    const [tabActive, setTabActive] = useState(0);
    const handleTabActive = (index) => {
        setTabActive(index)
    };

    // 메인에서 contact us 누를 시 브랜치 페이지 진입하자마자 하단 컨택폼으로 이동
    const location = useLocation();
    useEffect(() => {
        if(location.hash === '#contact_section' && contactScrollRef.current) {
            // contactScrollRef.current.scrollIntoView({behavior: 'smooth'});
            setTimeout(() => {
                contactScrollRef.current.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location]);



    //이메일
    const [email, setEmail] = useState(process.env.REACT_APP_SUPPORT_EMAIL_1); //기본 이메일
    const [emailTitle, setEmailTitle] = useState(t('HEADER_MENU_2_SUB_2')); //기본 분류
    const [name, setName] = useState('') 
    const [userEmail, setUserEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);

        const selectedText = event.target.options[event.target.selectedIndex].text;
        setEmailTitle(selectedText);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // const serviceIds = {
        //     [process.env.REACT_APP_SUPPORT_EMAIL_1] : process.env.REACT_APP_EMAIL_SERVICE_ID_1,
        //     [process.env.REACT_APP_SUPPORT_EMAIL_2] : process.env.REACT_APP_EMAIL_SERVICE_ID_2
        // }
        // const selectedServiceId = serviceIds[email];
        const subject = tabActive === 1 ? "" : `[${emailTitle}]`;

        const templateParams = {
            to_email: email,
            from_name: name,
            from_email: userEmail,
            message: message,
            subject:subject
        };

        // 유효성 검사: 필수 입력값들이 모두 채워졌는지 확인
        if (!name || !userEmail || !message) {
            alert('모든 필드를 채워주세요.');
            return;  // 이메일 전송을 하지 않고 함수 종료
        }

        setPopupType('loading');
        // 이메일 전송
        emailjs
        .send(process.env.REACT_APP_EMAIL_SERVICE_ID, 'template_30s3vqj', templateParams, process.env.REACT_APP_USER_ID)
        .then(
        (response) => {
            console.log('Email sent successfully', response);
            setPopupType('success');
        },
        (error) => {
            console.error('Error sending email', error);
            setPopupType('error');
        }
        );
    }


    const branchSectionList = [
        {
            id:0,
            name:t('HEADER_MENU_2_SUB_1'),
        },
        {
            id:1,
            name:t('HEADER_MENU_2_SUB_2'),
        },
        {
            id:2,
            name:t('HEADER_MENU_2_SUB_3'),
        },
        {
            id:3,
            name:t('HEADER_MENU_2_SUB_4'),
        },
        {
            id:4,
            name:t('HEADER_MENU_2_SUB_5'),
        }
    ]

    const tabsItem = [
        {
            id:0,
            name: t('BRANCH_CONTACT_TABS_1')
        },
        {
            id:1,
            name: t('BRANCH_CONTACT_TABS_2')
        },
    ]

    return (
        <Layouts>
            <div className={style.container}>
                <div className={style.visual_banner}>
                    <img alt="visual img" src={visualBanner} />
                    
                    <div className={style.inner_textBox}>
                        <div className={style.top}>
                            <h3 className={style.title}>{t('BRANCH_BANNER_TITLE')}</h3>
                            <p>{t('BRANCH_BANNER_SUB_TITLE')}</p>
                        </div>
                        <button type="button" onClick={contactScrollTo} className={style.scroll_to}>{t('BRANCH_BANNER_SCROLL_BTN')}</button>
                    </div>
                    <ul className={style.section_list}>
                        {branchSectionList.map((item, index) => (
                            <li key={item.id} onClick={() => scrollToSection(index)} className={index === 0 ? style.active : ''}>{item.name}</li>
                        ))}
                    </ul>
                </div>

                <div className={style.brunch_list}>
                    {branchDatas.map((item, index) => (
                        <div className={style.items} key={item.id} ref={(el) => (scrollRef.current[index] = el)}>
                            <div className={style.left}>
                                <div className={style.names}>
                                    <h3>{item.area}</h3>
                                    <p className={style.category}>{item.category}</p>
                                </div>
                                <div className={style.contents}>
                                    <a href={item.link} target="_blank" className={`${style.link} ${!item.link && style.no_link}`} rel="noreferrer">{t('BRANCH_GO_TO_WEB')}</a>
                                    <p className={style.address}>{item.address}</p>
                                    <p className={style.call}>TEL : {item.call}</p>
                                    <p className={style.intro}>{item.explain}</p>
                                </div>
                            </div>
                            <div className={style.right}>
                                {item.img && <img alt="market img" src={item.img} />}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={style.contact_form} ref={contactScrollRef} id="contact_section">
                    <form onSubmit={handleSubmit}>
                        <h3 className={style.title}>{t('BRANCH_CONTACT_US_TITLE')}</h3>
                        <p>{t('BRANCH_CONTACT_US_SUB_TITLE')}</p>
                        <div className={style.form_wrap}>
                            <div className={style.category_tabs}>
                                {tabsItem.map((item, index) => (
                                    <button type="button" key={item.id} onClick={() => handleTabActive(index)} className={`${style.tab_item} ${tabActive === index ? style.active : ''}`}>{item.name}</button>
                                ))}
                            </div>
                            {tabActive === 0 && 
                                <select name="email" value={email} onChange={handleEmailChange} id="" className={style.franchise_select}>
                                    <option value={process.env.REACT_APP_SUPPORT_EMAIL_1} checked>{t('HEADER_MENU_2_SUB_2')}</option>
                                    <option value={process.env.REACT_APP_SUPPORT_EMAIL_2}>{t('HEADER_MENU_2_SUB_5')}</option>
                                </select>
                            }
                            
                            <div className={style.form}>
                                <input type="text" name="name" value={name} id="" onChange={(e) => setName(e.target.value)} placeholder="Name" />
                                <input type="text" name="email" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} id="" placeholder="E-mail" />
                                <textarea name="message" value={message} id="" onChange={(e) => setMessage(e.target.value)} placeholder="Message"></textarea>
                            </div>
                        </div>
                        <button type="submit" className={style.submit_btn}>{t('BRANCH_CONTACT_SUBMIT')}</button>
                    </form>
                </div>
                {popupType && <MailSendPopup type={popupType} onClose={() => setPopupType(null)} />}
            </div>
        </Layouts>
    )
}

export default Branch;