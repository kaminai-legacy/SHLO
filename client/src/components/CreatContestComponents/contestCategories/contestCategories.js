import React from 'react';
import style from './contestCategories.module.scss';
import CardCategories from '../CardCategories/CardCategories';
import {CONTEST_IMGS} from '../../../constants/contestImgs';
import Title from '../../commonToAll/Title/Title';

function ContestCategories() {
    return (
        <div className={style.contestCategories}>
            <div className={style.contestCategoriesHeading}>
                <Title title={"Our Most Popular Categories"}
                       text={"Pick from our most popular categories, launch a contest and begin receiving submissions right away"}
                       color={"white"} borderColor={"white"}
                />
                <div className={style.flexCategories}>
                    <CardCategories name={"Name"} text={"Get up and running with the perfect name. "}
                                    img={[CONTEST_IMGS.name[0]]}
                                    imgHover={[CONTEST_IMGS.name[1]]} styles={"white"} link={'/contest_creating_step1'}/>
                    <CardCategories name={"Logo"} text={"Kickstart your venture with a unique, memorable logo "}
                                    img={[CONTEST_IMGS.logo[0]]}
                                    imgHover={[CONTEST_IMGS.logo[1]]} styles={"white"} link={'/home'}/>
                    <CardCategories name={"Tagline or Slogan"}
                                    text={"Connect deeply with your target audience with an on-target tagline "}
                                    img={[CONTEST_IMGS.taglineOrSlogan[0]]}
                                    imgHover={[CONTEST_IMGS.taglineOrSlogan[1]]} styles={"white"} link={'/home'}/>
                </div>
            </div>
        </div>
    )
}

export default ContestCategories;
