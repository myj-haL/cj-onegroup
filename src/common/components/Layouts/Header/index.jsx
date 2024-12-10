import style from "./index.module.scss";
import MobileHeader from "./MobileHeader";
import PcHeader from "./PcHeader";
import useResponsive from "../../../hook/Responsive";
import { useEffect, useRef, useState } from "react";

function Header () {
  const innerWidth = useResponsive();
  const [isLnbOpen, setIsLnbOpen] = useState(false);
  const lnbRef = useRef(false);
  const handleLnbOpen = () => {
    setIsLnbOpen(!isLnbOpen)
  }

  const handleLnbMouseEnter = () => {
    setIsLnbOpen(true)
  }

  const handleLnbMouseLeave = () => {
    setIsLnbOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if(lnbRef.current && !lnbRef.current.contains(event.target)) {
        setIsLnbOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside); // 모바일 환경 대응

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside); // 정리
    };
  }, [])

  return (
    <header className={style.container}>
      {innerWidth >= 1024 ? 
      <PcHeader 
        // handleLnbOpen={handleLnbOpen}
        handleLnbMouseEnter={handleLnbMouseEnter}
        handleLnbMouseLeave={handleLnbMouseLeave}
        isLnbOpen={isLnbOpen}
        lnbRef={lnbRef}
      /> 
      : 
      <MobileHeader
        handleLnbOpen={handleLnbOpen}
        isLnbOpen={isLnbOpen}
        lnbRef={lnbRef}
      />}
    </header>
  )
}

export default Header;