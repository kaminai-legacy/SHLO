import React from 'react';
import style from './carousel.module.scss';
import {Link} from 'react-router-dom';
import Slider from "react-slick";

function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
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
                    {/*<Slider {...settings}>
                        <div>
                            <h3>1</h3>
                        </div>
                        <div>
                            <h3>2</h3>
                        </div>
                        <div>
                            <h3>3</h3>
                        </div>
                        <div>
                            <h3>4</h3>
                        </div>
                        <div>
                            <h3>5</h3>
                        </div>
                        <div>
                            <h3>6</h3>
                        </div>
                    </Slider>*/}


                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className={style.imgSlideRow}>
                                <div className={style.imgSlide} style={{backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                                <div className={style.imgSlide} style={{backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                                <div className={style.imgSlide} style={{backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                                </div>
                                </div>
                            { /*       <div className="carousel-item ">
                                <div className={style.imgSlide} style={{backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                            </div>
                            <div className="carousel-item">
                                <div className={style.imgSlide} style={{backgroundImage:"url(https://imgng.gdeslon.ru/commodities/152394652/pictures/8a4268dd0508225403dc1cbf5501f889/big.jpg)"}}/>
                            </div>*/}
                        </div>

                        { /*  <div className={style.btn} data-slide="prev"> <span className="sr-only">Previous</span></div>
                        <div className={style.btn} data-slide="next"> <span className="sr-only">Next</span></div>*/}

                        <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                           data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                           data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>


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

export default Carousel;
