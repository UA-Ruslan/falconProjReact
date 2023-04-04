import style from "./BurgerMenu.module.scss";

const BurgerMenu = (props) => {


    return (

        <div className={props.isBurgerMenuActive ? style.burgerMenu + " " + style.burgerMenuActive : style.burgerMenu}>
            <div className={style.hrefWrapper}>
                <a className={style.linkStyle} href="#">technology</a>
                <a className={style.linkStyle} href="#">about us</a>
                <a className={style.linkStyle} href="#">impact</a>
                <a className={style.linkStyle} href="#">portfolio</a>
                <a className={style.linkStyle} href="#">blog</a>
                <button onMouseOver={props.mouseOver} onMouseOut={props.mouseOut} className={style.headerBtn}>book a demo
                </button>
            </div>
            <div>
                <span onClick={props.burgerMenuInactive} className={style.closeMenuBtn}>+</span>
            </div>
        </div>
    )
}

export default BurgerMenu;