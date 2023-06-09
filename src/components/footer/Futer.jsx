import React from "react";
import style from "./Futer.module.scss";
import mainIcon from "../../img/footer/v_icon.webp"
import facebook from "../../img/footer/facebook.webp"
import instagram from "../../img/footer/instagram.webp"
import twitter from "../../img/footer/twitter.webp"
import inImg from "../../img/footer/in_icon.webp"
import {AnimationOnScroll} from 'react-animation-on-scroll';


const Footer = (props) => {

    return (
        <AnimationOnScroll animateIn="animate__zoomInDown">
            <div id={props.arrID[1]} className={style.footerWrapper}>
                <div className={style.mainBlockWrapper}>
                    <div className={style.leftBlock}>
                        <img src={mainIcon} alt="mainIcon"/>
                        <p>
                            © 2021 VADE Group Inc.
                        </p>
                    </div>
                    <div className={style.middleBlock}>
                        <a className={style.linkStyle} href={`#${props.arrID[0]}`}>technology</a>
                        <a className={style.linkStyle} href={`#${props.arrID[2]}`}>impact</a>
                        <a className={style.linkStyle} href={`#${props.arrID[3]}`}>portfolio</a>
                        <a className={style.linkStyle} href={`#${props.arrID[4]}`}>blog</a>
                    </div>
                    <div className={style.rightBlock}>
                        <div className={style.hrefWrapper}>
                            <a href="#">team@vade.ai</a>
                        </div>
                        <div className={style.imgWrapper}>
                            <img src={facebook} width="100%" height="100%" alt="facebook"/>
                            <img src={instagram} width="100%" height="100%" alt="instagram"/>
                            <img src={twitter} width="100%" height="100%" alt="twitter"/>
                            <img src={inImg} width="100%" height="100%" alt="inImg"/>
                        </div>
                        <div className={style.pWrapper1}>
                            <p>
                                16 W Martin St. Suite <br/> 1101, Raleigh, NC 27601
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.bottomBlockWrapper}>
                    <div className={style.bottomHrefWrapper}>
                        <a className={style.linkStyle1} href="#">privacy policy</a>
                    </div>
                    <div className={style.bottomHrefWrapper}>
                        <a className={style.linkStyle1} href="#">terms of use</a>
                    </div>
                </div>
            </div>
        </AnimationOnScroll>
    )
}

export default Footer;