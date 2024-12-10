import { useTranslation } from "react-i18next";
import member1 from "../../assets/images/people/member-1.png";
import member2 from "../../assets/images/people/member-2.png";
import member3 from "../../assets/images/people/member-3.png";
import member4 from "../../assets/images/people/member-4.png";
import member5 from "../../assets/images/people/member-5.png";
import member6 from "../../assets/images/people/member-6.png";

function useMemberList () {
    const { t } = useTranslation();
    return [
        {
            id:0,
            img:member1,
            name:t('PEOPLE_MEMBER_1'),
            roll:t('PEOPLE_MEMBER_1_CATEGORY')
        },
        {
            id:1,
            img:member2,
            name:t('PEOPLE_MEMBER_2'),
            roll:t('PEOPLE_MEMBER_2_CATEGORY')
        },
        {
            id:2,
            img:member3,
            name:t('PEOPLE_MEMBER_3'),
            roll:t('PEOPLE_MEMBER_3_CATEGORY')
        },
        {
            id:3,
            img:member4,
            name:t('PEOPLE_MEMBER_4'),
            roll:t('PEOPLE_MEMBER_4_CATEGORY')
        },
        {
            id:4,
            img:member5,
            name:t('PEOPLE_MEMBER_5'),
            roll:t('PEOPLE_MEMBER_5_CATEGORY')
        },
        {
            id:5,
            img:member6,
            name:t('PEOPLE_MEMBER_6'),
            roll:t('PEOPLE_MEMBER_6_CATEGORY')
        }
    ]
}

export default useMemberList;