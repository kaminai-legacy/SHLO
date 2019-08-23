import React from 'react';
import style from './PackagesAndOther.module.scss';
import Title from '../../commonToAll/Title/Title';
import CardCategories from '../CardCategories/CardCategories';
import {CONTEST_IMGS} from '../../../constants/contestImgs';
import {contestProgressing, selectedContestType} from "../../../actions/actionCreator";
import connect from "react-redux/es/connect/connect";

function PackagesAndOther(props) {
    //  console.log(props.text);
    return (
        <>
            <Title title={"Save With Our Bundle Packages"}
                   text={"Launch multiple contests and pay a discounted bundle price"}
                   color={"black"} borderColor={"#28d2d0"}
            />
            <div className={style.flexCategoriesRow}>
                <CardCategories name={"Name + Logo"} contestType={['NAME','LOGO']}
                                text={"Get the essentials needed to establish your brand together and save"}
                                img={[CONTEST_IMGS.name[0], CONTEST_IMGS.logo[0]]}
                                imgHover={[CONTEST_IMGS.name[1], CONTEST_IMGS.logo[1]]} styles={"#f5f5f5"}
                                link={'/home'} click={props.selectedContestType} alsoClick={props.contestProgressing} currentStage={3}/>
                <CardCategories name={"Name + Logo + Business Cards"}  click={props.selectedContestType}  alsoClick={props.contestProgressing}
                                contestType={['NAME','TAGLINE_OR_SLOGAN','LOGO']} currentStage={3}
                                text={"Get the branding essentials plus matching business cards and save"}
                                img={[CONTEST_IMGS.name[0], CONTEST_IMGS.logo[0]]}
                                imgHover={[CONTEST_IMGS.name[1], CONTEST_IMGS.logo[1]]} styles={"#f5f5f5"}
                                link={'/home'}/>
                <CardCategories name={"Name + Tagline"} click={props.selectedContestType} alsoClick={props.contestProgressing}  contestType={['NAME','TAGLINE_OR_SLOGAN']}
                                text={"GCommunicate your vision with the perfect Name/Tagline combo."} currentStage={3}
                                img={[CONTEST_IMGS.name[0], CONTEST_IMGS.taglineOrSlogan[0]]}
                                imgHover={[CONTEST_IMGS.name[1], CONTEST_IMGS.taglineOrSlogan[1]]} styles={"#f5f5f5"}
                                link={'/home'}/>
                <CardCategories name={"Name + Logo + Tagline"} click={props.selectedContestType} alsoClick={props.contestProgressing} contestType={['NAME','TAGLINE_OR_SLOGAN','LOGO']}
                                text={"Establish your entire brand identity and save with this bundle."} currentStage={3}
                                img={[CONTEST_IMGS.name[0], CONTEST_IMGS.logo[0], CONTEST_IMGS.taglineOrSlogan[0]]}
                                imgHover={[CONTEST_IMGS.name[1], CONTEST_IMGS.logo[1], CONTEST_IMGS.taglineOrSlogan[1]]}
                                styles={"#f5f5f5"} link={'/home'}/>
            </div>

            <div className={style.flexCategoriesRow}>
                <CardCategories name={"Logo + Business Cards"} click={props.selectedContestType} alsoClick={props.contestProgressing} contestType={['NAME','TAGLINE_OR_SLOGAN','LOGO']}
                                text={"Get your logo and business cards designed together and save"}  currentStage={2}
                                img={[CONTEST_IMGS.logo[0], "url(https://www.squadhelp.com/story_images/contest_types/Logo-and-Business-Cards_grey.png)"]}
                                imgHover={[CONTEST_IMGS.logo[1], "url(https://www.squadhelp.com/story_images/contest_types/Logo-and-Business-Cards_blue.png)"]}
                                styles={"#f5f5f5"} link={'/home'}/>
                <CardCategories name={"Logo + Tagline"} text={"Description for Logo + Tagline will come here"}
                                img={[CONTEST_IMGS.logo[0], CONTEST_IMGS.taglineOrSlogan[0]]} click={props.selectedContestType} alsoClick={props.contestProgressing} contestType={['TAGLINE_OR_SLOGAN','LOGO']}
                                imgHover={[CONTEST_IMGS.logo[1], CONTEST_IMGS.taglineOrSlogan[1]]} styles={"#f5f5f5"}  currentStage={2}
                                link={'/home'}/>
                <CardCategories name={"Logo + Business Cards + Stationery"} click={props.selectedContestType} alsoClick={props.contestProgressing} contestType={['NAME','TAGLINE_OR_SLOGAN','LOGO']}
                                text={"Get your logo, business cards and stationery designed together and save"}  currentStage={2}
                                img={[CONTEST_IMGS.logo[0], "url(https://www.squadhelp.com/story_images/contest_types/Business-Cards_grey.png)", "url(https://www.squadhelp.com/story_images/contest_types/Stationary_grey.png)"]}
                                imgHover={[CONTEST_IMGS.logo[1], "url(https://www.squadhelp.com/story_images/contest_types/Business-Cards_blue.png)", "url(https://www.squadhelp.com/story_images/contest_types/Stationary_blue.png)"]}
                                styles={"#f5f5f5"} link={'/home'}/>
            </div>

            <Title title={"Other Categories"} text={"Additional ways to build your brand"}
                   color={"black"} borderColor={"#28d2d0"}
            />
            <div className={style.flexCategoriesRow}>
                <CardCategories name={"Signage"} text={"Get noticed with a high-quality a sign, billboard, or banner"}
                                img={["url(https://www.squadhelp.com/story_images/contest_types/Signage_grey.png)"]}
                                imgHover={["url(https://www.squadhelp.com/story_images/contest_types/Signage_blue.png)"]}
                                styles={"#f5f5f5"} link={'/home'}/>
                <CardCategories name={"Clothing"}
                                text={"Get dozens of T-shirt cover designs based upon your branding from our creatives"}
                                img={["url(https://www.squadhelp.com/story_images/contest_types/Clothing_grey.png)"]}
                                imgHover={["url(https://www.squadhelp.com/story_images/contest_types/Clothing_blue.png)"]}
                                styles={"#f5f5f5"} link={'/home'}/>
                <CardCategories name={"Email Template"}
                                text={"Get dozens of beautifully designed email templates for your email marketing campaigns from our branding experts"}
                                img={["url(https://www.squadhelp.com/story_images/contest_types/Email-Newsletter-Design_grey.png)"]}
                                imgHover={["url(https://www.squadhelp.com/story_images/contest_types/Email-Newsletter-Design_blue.png)"]}
                                styles={"#f5f5f5"} link={'/home'}/>
                <CardCategories name={"Product Feedback & Research"}
                                text={"Get feedback, ideas, research report for your product, business idea or industry. You can get early product advice from creatives across the world before launching your product to general audience. "}
                                img={["url(https://www.squadhelp.com/story_images/contest_types/Product-Feedback-Research_grey.png)"]}
                                imgHover={["url(https://www.squadhelp.com/story_images/contest_types/Product-Feedback-Research_blue.png)"]}
                                styles={"#f5f5f5"} link={'/home'}/>
            </div>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        state,
    };
};
const mapDispatchToProps = (dispatch) => ({
    selectedContestType: (contestTypes) => dispatch(selectedContestType(contestTypes)),
    contestProgressing: (currentStage) => dispatch(contestProgressing(currentStage)),
});
export default connect(mapStateToProps, mapDispatchToProps)(PackagesAndOther);