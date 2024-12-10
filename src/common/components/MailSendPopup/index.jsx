import style from "./index.module.scss";
import closeIcon from "../../../assets/images/icon-popup-close.svg";
import successIcon from "../../../assets/images/img-mail-success.png";
import errorIcon from "../../../assets/images/img-mail-error.png";
import { useCallback, useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";

function MailSendPopup ({type, onClose}) {
    const [popupClose, setPopupClose] = useState(true);
    const closePopup = useCallback(() => {
        setPopupClose(false);
        setTimeout(() => {
            if (onClose) onClose();
        },100);  
    }, [onClose])

    useEffect(() => {
        if(type === 'success') {
            const timer = setTimeout(closePopup, 3000); // 3초 후 자동 닫힘
            return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
        } 
    }, [type, closePopup]);

    // if (!popupClose) return null;

    return (
        <div className={`${style.container} ${popupClose ? style.fade_in : style.fade_out}`}>
            <div className={style.inner}>
                <button className={style.close} type="button" onClick={closePopup}>
                    <img alt="close icon" src={closeIcon} />
                </button>
                <h3>
                    {type === 'error' ? 'Incorrect input' : type === 'loading' ? "Loading..." : 'The inquiry has been completed.' }
                </h3>
                {type === 'error' ? 
                    <img alt="error icon" src={errorIcon} />
                    : type === 'loading' ? 
                    <MoonLoader
                        color='#36d7b7'
                        loading={true}
                        size={80}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className={style.loader}
                    /> 
                  :
                  <img alt="success icon" src={successIcon} />
                }
            </div>
        </div>
    )
}

export default MailSendPopup;