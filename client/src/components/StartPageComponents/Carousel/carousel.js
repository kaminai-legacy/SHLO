import React from 'react';
//import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './carousel.module.scss';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function CarouselElement() {
    const prevIcon = <span className={style.toLeft} ><i className="fas fa-chevron-left"/></span>;
    const nextIcon = <span className={style.toRight}><i className="fas fa-chevron-right"/></span>;
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1170 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.

        },
        tablet: {
            breakpoint: { max: 1170, min: 780 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 780, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };
    return (
        <div className={style.carousel}>
            <div className={style.content}>
                <div className={style.navTabs}>
                    <div className={style.newTabsButton} id={"navTabsSelect"}>
                        Names
                    </div>
                    <div className={style.newTabsButton}>
                        Taglines & Slogans
                    </div>
                    <div className={style.newTabsButton}>
                        Logo Design
                    </div>
                </div>
                <div className={style.carouselN1}>
                    <Carousel
                       customTransition="all 0.4s cubic-bezier(0,0,1,1) 0s"
                        swipeable={false}
                        draggable={true}
                        centerMode={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        focusOnSelect={false}
                        minimumTouchDrag={80}
                        arrows={true}
                       autoPlay
                        customLeftArrow={prevIcon}
                        customRightArrow={nextIcon}
                        autoPlaySpeed={5000}
                        itemClass=""
                        containerClass=""
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                    >
                        <div className={style.imgSlide} style={{backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(http://wallperio.com/data/out/322/peter-lik-wallpaper_613984928.jpg)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrT1K8sMHKYmXOzVuhnCbq0CXsNLcLxt913qS_9vLQhcXpGI6t)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0wvD3qaUlZbS67ljuQ3a3T9_Gxvn_NPbTVPQOH3kUMcrRUeKc)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(http://catalyst.ca/wp-content/uploads/0598_CatalystGraphs_HomeUse-348x348.jpg)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjvYM1WsKrBfzGP--Fk6jK6qOPaG92IgsrP8nSNvS0SwHCyLsx)"}}/>
                        <div className={style.imgSlide} style={{borderColor:"red",backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(http://wallperio.com/data/out/322/peter-lik-wallpaper_613984928.jpg)"}}/>
                        <div className={style.imgSlide} style={{backgroundImage:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrT1K8sMHKYmXOzVuhnCbq0CXsNLcLxt913qS_9vLQhcXpGI6t)"}}/>
                    </Carousel>;

                </div>
                <div className={style.moreName}>
                    <Link to="/ss">
                        <div className={style.exploreButton}>
                            Explore Names For Sale
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CarouselElement;
