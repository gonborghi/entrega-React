import "./ItemDetail.css"

const ItemDetail = ({ product }) => {

    return (
        <div className="item-detail">
            <div className="item-detail">
                <div className="secondary-images">
                </div>
                <div className="main-image">
                    <img src={product.image} alt={product.name} />
                </div>
            </div>

            <div className="text-detail-container">
                <h2 className="title-detail">{product.name}</h2>
            </div>
            <div className="text-description">
                <p className="text-description">{product.description}</p>
            </div>
            <div className="text-price">
                <p>Precio: ${product.price}</p>
            </div>
        </div>
    );
}

export default ItemDetail;
