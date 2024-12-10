import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop (props) {
    const {pathname} = useLocation();

    useEffect(() => {
        console.log("awalys scroll to top!");
        window.scrollTo(0,0)
    }, [pathname]);

    return (
        <>{props.children}</>
    )
}

export default ScrollToTop;