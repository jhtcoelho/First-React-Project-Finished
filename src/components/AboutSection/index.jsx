import MobileIcon from "../../assets/MobileIcon.svg"
import styles from "./style.module.css"

export const AboutSection = () => {
    return(
        <section className={`${styles.aboutSection} section-padding`}>
            <div className="container">
                <div className={styles.flexbox}>
                    <div>
                        <img src={MobileIcon} alt="Mobile Icon" />
                        <h2 className="title lg black">Sobre o <span className="red">aplicativo</span></h2>
                    </div>
                    <p className="paragraph black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam porro praesentium debitis assumenda nulla, provident esse nisi hic facilis numquam dolores consequuntur eveniet quibusdam vero magni totam odit odio voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit similique alias animi! Dolorem quibusdam autem repellat omnis consectetur commodi saepe molestias et aliquam esse! Ad excepturi a deserunt est. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa commodi sunt aperiam? Veritatis beatae dignissimos harum nihil sapiente deserunt ratione, repellendus eius voluptate, aliquam error neque, inventore quos aperiam maxime.</p>
                </div>
            </div>
        </section>
    )
}