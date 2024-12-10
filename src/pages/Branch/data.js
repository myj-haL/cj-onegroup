import { useTranslation } from "react-i18next";
import img1 from "../../assets/images/branch/branch-img-1.png";
import img2 from "../../assets/images/branch/branch-img-2.png";
import img3 from "../../assets/images/branch/branch-img-3.png";
import img4 from "../../assets/images/branch/branch-img-4.png";
import img5 from "../../assets/images/branch/branch-img-5.png";


function useBranchData () {
    const { t } = useTranslation();
    return [
        {
            id:0,
            area:t('HEADER_MENU_2_SUB_1'),
            category:t('BRANCH_MARKET_1_SUB_TITLE'),
            address:'ADRESS : 35-36 Greek St, London W1D 5DL',
            call:'02072870526',
            explain:t('BRANCH_MARKET_1_TEXT'),
            img:img1,
            link:'https://chungdam.co.uk/'
        },
        {
            id:1,
            area:t('HEADER_MENU_2_SUB_2'),
            category:t('BRANCH_MARKET_2_SUB_TITLE'),
            address:'ADRESS : 15 Frith St, London W1D 4RE',
            call:'02036683504',
            explain:t('BRANCH_MARKET_2_TEXT'),
            img:img2,
        },
        {
            id:2,
            area:t('HEADER_MENU_2_SUB_3'),
            category:t('BRANCH_MARKET_3_SUB_TITLE'),
            address:'ADRESS : 110 Shaftesbury Ave, London W1D 5EH',
            call:'02074398393',
            explain:t('BRANCH_MARKET_3_TEXT'),
            img:img3,
            link:'https://shibuyasoho.com/'
        },
        {
            id:3,
            area:t('HEADER_MENU_2_SUB_4'),
            category:t('BRANCH_MARKET_4_SUB_TITLE'),
            address:'ADRESS : 26 Romilly St, London W1D 5AJ',
            call:'02072871585',
            explain:t('BRANCH_MARKET_4_TEXT'),
            img:img4,
            link:'https://hongdaepocha.com/'
        },
        {
            id:4,
            area:t('HEADER_MENU_2_SUB_5'),
            category:t('BRANCH_MARKET_5_SUB_TITLE'),
            address:'ADRESS : 45 Haven Grn, London W5 2NX',
            call:'-',
            explain:t('BRANCH_MARKET_5_TEXT'),
            img:img5
        }
    ]
}

export default useBranchData;