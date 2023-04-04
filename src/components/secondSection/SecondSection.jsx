import React from "react"
import style from "./SecondSection.module.scss"
import cameraImg from "../../img/second_section/camera.png"
import sunImg from "../../img/second_section/sun_ray_2.png"
import recordImg from "../../img/second_section/record.png"
import iconImg1 from "../../img/second_section/icon_1.png"
import iconImg2 from "../../img/second_section/icon_2.png"
import iconImg3 from "../../img/second_section/icon_3.png"


const SecondSection = () => {
    return (
        <div className={style.secondSectionWrapper}>
            <div className={style.cameraBtnWrapper}>
                <div className={style.getToNowWrapper}>
                    <div className={style.title}>
                        <p>
                            Get to know the <br/> curb better
                        </p>
                    </div>
                    <div className={style.txtWrapper}>
                        <p>
                            Vade replaces legacy parking infrastructure with wireless cameras, <br/> computer vision,
                            and granular
                            analytics. We make it easy for cities <br/> to monitor and manage curb space in real-time.
                        </p>
                    </div>
                    <div className={style.btnWrapper}>
                        <button>More about our technology</button>
                    </div>
                </div>
                <div className={style.cameraWrapper}>
                    <img src={cameraImg} alt="cameraImg"/>
                </div>
            </div>
            <div className={style.contentWrapper}>
                <div className={style.contentItem}>
                    <div className={style.iconWrapper}>
                        <img src={iconImg1} alt=""/>
                    </div>
                    <div className={style.pWrapper1}>
                        <p>
                            Fully wireless hardware
                        </p>
                    </div>
                    <div className={style.pWrapper2}>
                        <p>
                            We provide solar and cellular cameras <br/> that work anywhere, operate 24/7, and <br/> take
                            under 10 minutes to install.
                        </p>
                    </div>
                </div>
                <div className={style.contentItem}>
                    <div className={style.iconWrapper}>
                        <img src={iconImg2} alt=""/>
                    </div>
                    <div className={style.pWrapper1}>
                        <p>
                            Real-time data
                        </p>
                    </div>
                    <div className={style.pWrapper2}>
                        <p>
                            Measure availability and compliance in <br/> real-time with our powerful and <br/> accurate
                            computer vision pipeline.
                        </p>
                    </div>
                </div>
                <div className={style.contentItem}>
                    <div className={style.iconWrapper}>
                        <img src={iconImg3} alt=""/>
                    </div>
                    <div className={style.pWrapper1}>
                        <p>
                            Full service subscription
                        </p>
                    </div>
                    <div className={style.pWrapper2}>
                        <p>
                            One subscription for the cameras, <br/> installation, maintenance, <br/> implementation,
                            software, and support.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;