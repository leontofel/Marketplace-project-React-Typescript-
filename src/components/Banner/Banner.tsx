import { BannerContainer } from "./stylesBanner";

type BannerProps = {
    title: string,
    img: string,
    link: string
}
export function Banner({title, img, link}: BannerProps) {

    return(
        <section>
            <BannerContainer image={img}>
                    <a href={link}><h2>{title}</h2></a>
                    <img src={img} alt="banner" />
            </BannerContainer>
        </section>
    );
}