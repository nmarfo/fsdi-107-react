import './catalog.css';
import Product from './product';

const Catalog = () => {
    return (
        <div className="catalog">
            <h1>Take out time to check out my catalog</h1>
            
            <div className="product-list">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
};

export default Catalog;