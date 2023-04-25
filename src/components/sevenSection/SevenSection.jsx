import React from "react";
import style from "./SevenSection.module.scss";
import photo1 from "../../img/sevenSection/photo_1.webp"
import photo2 from "../../img/sevenSection/photo_2.webp"
import photo3 from "../../img/sevenSection/photo_3.webp"
import {AnimationOnScroll} from 'react-animation-on-scroll';

const SevenSection = (props) => {
    return (

        <div id={props.id} className={style.sevenSectionWrapper}>

            <div className={style.titleWrapper}>
                <p>
                    Our blog posts
                </p>
            </div>

            <div className={style.mainBlockWrapper}>
                <div className={style.mainBlockItem}>
                    <div className={style.imgWrapper}>
                        <img src={photo1} alt="photo1"/>
                    </div>
                    <div className={style.txtBlock}>
                        <div className={style.pWrapper1}>
                            <p>
                                2021 Mid-South Parking and <br/> Transportation (MSPTA) <br/> Conference
                            </p>
                        </div>
                        <div className={style.pWrapper2}>
                            <p>
                                September 21, 2021
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.mainBlockItem}>
                    <div className={style.imgWrapper}>
                        <img src={photo2} alt="photo2"/>
                    </div>
                    <div className={style.txtBlock}>
                        <div className={style.pWrapper1}>
                            <p>
                                2021 Parking Industry Expo <br/> (PIE)
                            </p>
                        </div>
                        <div className={style.pWrapper2}>
                            <p>
                                September 21, 2021
                            </p>
                        </div>
                    </div>
                </div>
                <div className={style.mainBlockItem}>
                    <div className={style.imgWrapper}>
                        <img src={photo3} alt="photo3"/>
                    </div>
                    <div className={style.txtBlock}>
                        <div className={style.pWrapper1}>
                            <p>
                                2021 International Parking & <br/> Mobility Institute (IPMI) <br/> Conference
                            </p>
                        </div>
                        <div className={style.pWrapper2}>
                            <p>
                                September 16, 2021
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className={style.btnWrapper}>
                <AnimationOnScroll animateIn="animate__rubberBand">
                    <button>Read all posts</button>
                </AnimationOnScroll>
            </div>
        </div>

    )
}

export default SevenSection;