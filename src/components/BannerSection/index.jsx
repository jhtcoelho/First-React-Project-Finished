import BannerIlustration from "../../assets/BannerFood.png"
import styles from "./style.module.css"

export const BannerSection = () => {
    return(
        <section className={`${styles.bannerSection} section-padding`}>
            <div className="container">
                <div className={styles.flexBox}>
                    <div>
                        <h1 className="title lg black">Descubra o melhor <span className="red">aplicativo de comida</span></h1>
                        <p className="paragraph black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo consequatur non omnis veniam suscipit totam ab praesentium ad fuga tempora? Reiciendis inventore libero veniam pariatur ipsam suscipit veritatis voluptatum quasi!</p>
                        <a href="#" className="btn red">Saiba mais</a>
                    </div>
                <img src={BannerIlustration} alt="Comidas Gostosas" />
                </div>
            </div>
        </section>
    )
}