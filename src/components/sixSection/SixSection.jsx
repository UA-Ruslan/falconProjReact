import React from "react";
import style from "./SixSection.module.scss";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const SixSection = () => {
    return (
        <AnimationOnScroll animateIn="animate__rubberBand">
            <div className={style.sixSectionWrapper}>
                <div className={style.leftBlockWrapper}>
                    <div className={style.titleWrapper}>
                        <p>
                            Power up <br/> the future <br/> of cities
                        </p>
                    </div>
                    <div className={style.pWrapper1}>
                        <p>
                            We're building a new paradigm of urban mobility <br/> that understands and adapts to the
                            world
                            around <br/> it. We empower cities with dynamic tools to make <br/> streets safer, less
                            congested, and more <br/> productive.
                        </p>
                    </div>
                </div>
                <div className={style.rightBlockWrapper}>
                    <div className={style.pWrapper2}>
                        <p>
                            Read more on how we’re <br/> improving transportation on <br/> our Impact page.
                        </p>
                    </div>
                    <div className={style.btnWrapper}>
                        <button>Social impact</button>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    )
}

export default SixSection;