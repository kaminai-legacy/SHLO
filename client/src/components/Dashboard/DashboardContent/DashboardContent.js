import React from 'react';
import style from './DashboardContent.module.scss';
import connect from 'react-redux/es/connect/connect';
import DashboardContestStatus from '../DashboardContestStatus/DashboardContestStatus';
import DashboardContentBlock from './DashboardContentBlock/DashboardContentBlock';
import DashboardContentHelpfulArticles from './DashboardContentHelpfullArticles/DashboardContentHelpfulArticles';
import {Link} from "react-router-dom";

const TEMP = [{
    img: "https://www.squadhelp.com/story_images/visual_images/10224397.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/12281560-01.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/10485907.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/10485907.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/10224397.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/10224397.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/10224397.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}, {
    img: "https://www.squadhelp.com/story_images/visual_images/10224397.jpg",
    link: "https://www.squadhelp.com/name/Jobixo"
}
    , {
        img: "https://www.squadhelp.com/story_images/visual_images/10485907.jpg",
        link: "https://www.squadhelp.com/name/Jobixo"
    }, {
        img: "https://www.squadhelp.com/story_images/visual_images/10485907.jpg",
        link: "https://www.squadhelp.com/name/Jobixo"
    }, {
        img: "https://www.squadhelp.com/story_images/visual_images/10485907.jpg",
        link: "https://www.squadhelp.com/name/Jobixo"
    }, {
        img: "https://www.squadhelp.com/story_images/visual_images/10485907.jpg",
        link: "https://www.squadhelp.com/name/Jobixo"
    }];


function dashboardContent(props) {
    return (

        <div className={style.dashboardContent}>
            <DashboardContestStatus/>
            <DashboardContentBlock title={"Contests in Draft"}>
                <div className={style.contestInDraft}>
                    <div className={style.contestInDraftContainer}>
                        <div className={style.contestInDraftContainerInside}>
                            <div className={style.contestInDraftContainerColumn}>
                                <div className={style.contestInDraftContainerRow}>
                                    <div className={style.contestInDraftContainerRowInsideColumn}>
                                        <div className={style.firstRow}>
                                            <Link to=""> #474673 - Name for a Consulting Agency</Link>
                                        </div>
                                        <div className={style.secondRow}>
                                            <Link to=""> Naming / Tagline</Link> (Saved 20 hours ago)
                                        </div>
                                    </div>
                                    <div className={style.buttonPosition}>
                                        <Link to="">
                                            <div className={style.button}>
                                                <i className="fas fa-pen-square"/> Continue Editing
                                            </div>
                                        </Link></div>
                                </div>
                                <div className={style.contestInDraftContainerRow}>
                                    <div className={style.contestInDraftContainerRowInsideColumn}>
                                        <div className={style.thirdRow}>
                                            sadfry rtuj rt666asdasda
                                        </div>
                                        <div className={style.fourthRow}>
                                            ..
                                        </div>
                                    </div>
                                    <div>
                                        {}
                                    </div>
                                </div>
                                <div className={style.contestInDraftContainerRow}>
                                    <div className={style.fifthRow}>
                                        <div>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>
                                            <i className="far fa-star"/>&nbsp;&nbsp; Kaminai   &nbsp;&nbsp;&nbsp; <i
                                            className="far fa-gem"/> $0
                                        </div>
                                    </div>
                                    <div className={style.sixthRow}>
                                        <i className="fas fa-trash-alt"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DashboardContentBlock>


            <DashboardContentBlock title={"Helpful Articles"}>
                <div className={style.helpfulArticles}>
                    <DashboardContentHelpfulArticles>
                        <Link
                            to="https://helpdesk.squadhelp.com/contest-holders-starter-kit/the-art-of-writing-a-perfect-contest-brief">
                            The Art of Writing Perfect Contest Brief</Link>
                    </DashboardContentHelpfulArticles>
                    <DashboardContentHelpfulArticles>
                        <Link to="https://helpdesk.squadhelp.com/squadhelp-services/squadhelp-managed-contest-service">
                            Need Expert Assistance? Learn About Squadhelp Managed Contest Service</Link>
                    </DashboardContentHelpfulArticles>
                    <DashboardContentHelpfulArticles>
                        <Link
                            to="https://helpdesk.squadhelp.com/contest-holders-launching-a-contest/squadhelp-contest-bundles">
                            Save With Squadhelp Contest Bundle Packages</Link>
                    </DashboardContentHelpfulArticles>
                </div>
            </DashboardContentBlock>


            <DashboardContentBlock title={"Recommendations From Our Marketplace"} marginBottom={"60px"}>
                {
                    TEMP.map((Recommendation, id) => {
                        return <div className={style.Recommendation} key={id}>
                            <div className={style.RecommendationImg}>
                                <Link className={style.RecommendationLink} to={Recommendation.link}>
                                    <img alt={"Recommendation"} className={style.RecommendationImgInside}
                                         src={Recommendation.img}>

                                    </img>
                                </Link>
                            </div>
                        </div>
                    })}

            </DashboardContentBlock>
        </div>);
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducers.user
    };
};
export default connect(mapStateToProps)(dashboardContent);
