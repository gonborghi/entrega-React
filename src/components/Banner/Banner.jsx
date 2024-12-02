//rafce
import bannerImage from "../../assets/banner.png"
import "./banner.css"

const Banner = ({urlImage, saludo, saludando}) => {

    return(
        <div className="banner" /*onClick={funcion}*/>
            <img width = {"600"} src={urlImage} alt="" />
        </div>
    )
}

export default Banner