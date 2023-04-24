import React, {useState} from "react"
import style from "./FirstSection.module.scss"
import car1 from "../../img/firstSection/car1.png"
import car2 from "../../img/firstSection/car2.png"
import car from "../../img/firstSection/car.png"
import block from "../../img/firstSection/yellow_block.png"
import block1 from "../../img/firstSection/yellow_block1.png"
import BurgerMenu from "../burgerMenu/BurgerMenu";
import {AnimationOnScroll} from 'react-animation-on-scroll';

const FirstSection = (props) => {
    const [headerBtnActive, setHeaderBtnActive] = useState(false);
    const [firstSectionBtnActive, setFirstSectionBtnActive] = useState(false);
    const [isBurgerBtnActive, setBurgerBtnActive] = useState(false);
    const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);

    const mouseOver = () => {
        setHeaderBtnActive(true)
    };
    const mouseOut = () => {
        setHeaderBtnActive(false)
    };
    const mouseOver1 = () => {
        setFirstSectionBtnActive(true)
    };
    const mouseOut1 = () => {
        setFirstSectionBtnActive(false)
    };
    const mouseOverBurger = () => {
        setBurgerBtnActive(true)
    }
    const mouseOutBurger = () => {
        setBurgerBtnActive(false)
    }
    const burgerMenuActive = () => {
        setBurgerMenuActive(true)
    }
    const burgerMenuInactive = () => {
        setBurgerMenuActive(false)
    }
    return (
        <div className={style.firstSection}>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    <a className={style.linkStyle} href="#">VADE</a>
                </div>

                <BurgerMenu
                    setBurgerMenuActive={setBurgerMenuActive}
                    isBurgerMenuActive={isBurgerMenuActive}
                    mouseOut={mouseOut}
                    mouseOver={mouseOver}
                    burgerMenuInactive={burgerMenuInactive}
                    arrID={props.arrID}
                />

                <div onClick={burgerMenuActive} onMouseOver={mouseOverBurger} onMouseOut={mouseOutBurger}
                     className={style.burger}>
                    <div className={`${style.burgerItem} ${style.item1}`}></div>
                    <div className={`${style.burgerItem} ${style.item2}`}></div>
                    <div
                        className={isBurgerBtnActive ? style.item3Anim + " " + style.burgerItem : style.burgerItem + " " + style.item3}></div>
                </div>
            </div>
            <div className={style.contentWrapper}>
                <div className={style.firstSectionTitle}>
                    <AnimationOnScroll initiallyVisible={true} animateIn="animate__shakeX">
                        <p>Connecting the curb <br/> to new insights</p>
                    </AnimationOnScroll>
                </div>
                <div className={style.pWrapper}>
                    <AnimationOnScroll delay={150} initiallyVisible={true} animateIn="animate__shakeX">
                        <p>
                            Real-time curb data for smart cities. Measure <br/> occupancy, analyze
                            demand,
                            and
                            manage curb space<br/> with the right tools.
                        </p>
                    </AnimationOnScroll>
                </div>
                <div className={style.btnWrapper}>
                    <AnimationOnScroll delay={300} initiallyVisible={true} animateIn="animate__shakeX">
                        <button onMouseOver={mouseOver1} onMouseOut={mouseOut1} className={style.btnFirstSection}>Book a
                            demo
                        </button>
                    </AnimationOnScroll>
                </div>


            </div>
            <img className={headerBtnActive ? style.imgCar1 + " " + style.newImgCar1 : style.imgCar1} src={car1}
                 alt="imgCar1"/>
            <img className={firstSectionBtnActive ? style.imgCar2 + " " + style.newImgCar2 : style.imgCar2}
                 src={car2}
                 alt="imgCar2"/>
            <img className={headerBtnActive ? style.imgCar + " " + style.newImgCar : style.imgCar} src={car}
                 alt="imgCar"/>
            <img className={firstSectionBtnActive ? style.imgBlock + " " + style.newImgBlock : style.imgBlock}
                 src={block} alt="imgBlock"/>
            <img className={firstSectionBtnActive ? style.imgBlock1 + " " + style.newImgBlock1 : style.imgBlock1}
                 src={block1} alt="imgBlock1"/>
        </div>
    )
}

export default FirstSection;