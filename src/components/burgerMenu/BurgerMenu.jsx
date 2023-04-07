import style from "./BurgerMenu.module.scss";

const BurgerMenu = (props) => {
const onClick = () => {
    props.setBurgerMenuActive(false)
}
    return (

        <div className={props.isBurgerMenuActive ? style.burgerMenu + " " + style.burgerMenuActive : style.burgerMenu}>
            <div className={style.hrefWrapper}>
                <a onClick={onClick} className={style.linkStyle} href={`#${props.arrID[0]}`}>technology</a>
                <a onClick={onClick} className={style.linkStyle} href={`#${props.arrID[1]}`}>about us</a>
                <a onClick={onClick} className={style.linkStyle} href={`#${props.arrID[2]}`}>impact</a>
                <a onClick={onClick} className={style.linkStyle} href={`#${props.arrID[3]}`}>portfolio</a>
                <a onClick={onClick} className={style.linkStyle} href={`#${props.arrID[4]}`}>blog</a>
                <button onClick={onClick} onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} className={style.headerBtn}>book a demo
                </button>
            </div>
            <div>
                <span onClick={props.burgerMenuInactive} className={style.closeMenuBtn}>+</span>
            </div>
        </div>
    )
}

export default BurgerMenu;