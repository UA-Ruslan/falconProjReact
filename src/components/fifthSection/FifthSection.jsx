import React from "react";
import style from "./FifthSection.module.scss";
import icon from "../../img/fifthSection/icon_fifth_section.png";

const FifthSection = () => {
    return (
        <div className={style.fifthSectionWrapper}>
            <div className={style.contentWrapper}>
                <p>
                    <span>Curb</span> management can help ensure that <br/> curb space is allocated more equitably, <br/> providing
                    access to
                    this limited <br/> resource to all street users, including <br/> our most vulnerable.”
                </p>
            </div>
            <div className={style.iconDescriptionWrapper}>
                <div className={style.iconWrapper}>
                    <img src={icon} alt="icon"/>
                </div>
                <div className={style.pWrapper}>
                    <div className={style.descriptionWrapper1}>
                        <p>
                            San Francisco
                        </p>
                    </div>
                    <div className={style.descriptionWrapper2}>
                        <p>
                            Municipal Transportation <br/> Agency
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FifthSection;