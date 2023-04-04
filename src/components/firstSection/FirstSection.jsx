import React from "react"
import style from "./FirstSection.module.scss"

const FirstSection = () => {
    return (
        <div className={style.firstSection}>
            <div className={style.header}>
                <div className={style.headerTitle}>
                    <a href="#">VADE</a>
                </div>
                <div className={style.navWrapper}>
                    <a href="#">technology</a>
                    <a href="#">about us</a>
                    <a href="#">impact</a>
                    <a href="#">portfolio</a>
                    <a href="#">blog</a>
                    <button>book a demo</button>
                </div>
            </div>
            <div className={style.contentWrapper} >
                <div>
                    <h1>Connecting the curb <br/> to new insights</h1>
                </div>
                <div>
                    <p>
                        Real-time curb data for smart cities. Measure <br/> occupancy, analyze
                        demand,
                        and
                        manage curb space<br/> with the right tools.
                    </p>
                </div>
                <div>
                    <button>Book a demo</button>
                </div>
            </div>
        </div>
    )
}

export default FirstSection;