
import "./ProductCard.css"
function ProductCard({name, price, image, inStock}){
    return(
        <div className={`product-card ${inStock? 'instock' : 'outstock'} `}>
            <img src={image} alt={`${name} image`} className="product-image"/>
            <h3 className="product-name">{name}</h3>
            <p className="pricee">{price}</p>
            <div>
                {inStock && <div className="pstock"> In-Stock ✔</div>}
            </div>
        </div>
    )
} 

export default ProductCard