import React from "react";
import icon1 from "../../img/forthSection/raleigh.png"
import icon2 from "../../img/forthSection/f_d_o_t.png"
import icon3 from "../../img/forthSection/us_davis.png"
import icon4 from "../../img/forthSection/city_of_aspen.png"
import icon5 from "../../img/forthSection/walker.png"
import icon6 from "../../img/forthSection/california.png"
import icon7 from "../../img/forthSection/premium_parking.png"
import icon8 from "../../img/forthSection/signature.png"

import style from "./ForthSection.module.scss"

const ForthSection = () => {
    return (
        <div className={style.forthSectionWrapper}>
            <div className={style.titleWrapper}>
                <p>
                    Trusted by leaders in <br/> urban transportation
                </p>
            </div>
            <div className={style.pWrapper1}>
                <p>
                    Transparency and quality are the basis of our work, and we've helped <br/>
                    cities and vendors across the
                    United States.
                </p>
            </div>
            <div className={style.pWrapper2}>
                <p>
                    Here's who we've worked with
                </p>
            </div>
            <div className={style.iconWrapper}>
                <div className={style.iconBlockWrapper}>
                    <div className={style.iconWrapper}>
                        <img src={icon1} alt="icon"/>
                    </div>
                    <div className={style.iconWrapper}>
                        <img src={icon2} alt="icon"/>
                    </div>
                    <div className={style.iconWrapper}>
                        <img src={icon3} alt="icon"/>
                    </div>
                    <div className={style.iconWrapper}>
                        <img src={icon4} alt="icon"/>
                    </div>
                </div>
                <div className={style.iconBlockWrapper}>
                    <div className={style.iconWrapper}>
                        <img src={icon5} alt="icon"/>
                    </div>
                    <div className={style.iconWrapper}>
                        <img src={icon6} alt="icon"/>
                    </div>
                    <div className={style.iconWrapper}>
                        <img src={icon7} alt="icon"/>
                    </div>
                    <div className={style.iconWrapper}>
                        <img src={icon8} alt="icon"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForthSection;