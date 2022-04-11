import { useEffect, useState } from "react";

const Shop = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  const fetchItems = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    const data = await response.json();
    setIsLoading(false);
    setProducts(data);
  };


  useEffect(() => {
    setIsLoading(true)
    fetchItems();
  }, []);

  const handleAdd = (id) => {
    const product = products.find((product) => product.id === id);
    addToCart(product);
  };

  const productList = products.map((product) => {
    return (
      <ProductItem
        key={product.id}
        id={product.id}
        image={product.image}
        title={product.title}
        price={product.price}
        handleAdd={handleAdd}
      />
    );
  });

  return (
    <div className="shop-container">
      <div className="shop-title">
        <h2>Shop</h2>
      </div>
      {
        isLoading ? 
       <div className="loading">Items are loading...</div>
       : <div className="product-list-container">
        <ul>{productList}</ul>
      </div>
      }
      <div className="shop-filters"></div>
      
    </div>
  );
};

const ProductItem = ({ id, image, title, price, handleAdd }) => {
  return (
    <li>
      <div className="product-img">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <div className="product-title">{title}</div>
        <div className="product-price">
          <span>$ </span>
          {price}
        </div>
        <div className="add-product" onClick={() => handleAdd(id)}>
          Add
        </div>
      </div>
    </li>
  );
};

export default Shop;
