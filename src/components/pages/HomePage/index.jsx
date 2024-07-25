import { Header } from "../../Header"
import { AboutSection } from "../../AboutSection"
import { BannerSection } from "../../BannerSection"
import { FormSection } from "../../FormSection"
import { RestaurantSection } from "../../RestaurantSection"
import { Footer } from "../../Footer"


export const HomaPage = () => {
    return(
        <>
            <Header />
            <main>
                <BannerSection />
                <RestaurantSection />
                <AboutSection />
                <FormSection />
            </main>
            <Footer />
        </>
    )
}