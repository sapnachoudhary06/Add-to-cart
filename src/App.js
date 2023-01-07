import React, {useCallback, useState} from 'react';
import './App.css';
import 'h8k-components';
import ProductList from "./components/product-list";
import Cart from "./components/cart";

const title = "HackerShop";

const PRODUCTS = [
  {
      name: "Cap",
      price: 5
  },
  {
      name: "HandBag",
      price: 30
  },
  {
      name: "Shirt",
      price: 35
  },
  {
      name: "Shoe",
      price: 50
  },
  {
      name: "Pant",
      price: 35
  },
  {
      name: "Slipper",
      price: 25
  }
];

const App = () => {
  const [products, setProducts] = useState([...PRODUCTS].map((product, index) => {
    return {...product,
      productId: index + 1,
    productImage: `/images/items/${product.name.toLocaleLowerCase()}.png`,
    productCartQuantity: 0,
    }
  }));

  const addProductToCart = useCallback((productName) => {
    console.log(`adding`)
    setProducts((prevProducts) => {
      console.log(prevProducts);
      return prevProducts.map((product) => {
        if (product.name === productName) {
          console.log('cart quantity', product.productCartQuantity);
          return {
            ...product,
            productCartQuantity: product.productCartQuantity + 1,
          };
        }

        return product;

      })
  });
  }, []);

  const removeFromCart = useCallback((productName) => {
    console.log(`adding`)
    setProducts((prevProducts) => (
      prevProducts.map((product) => {
        if (product.name === productName) {
          return {
            ...product,
            productCartQuantity: product.productCartQuantity - 1,
          };
        }

        return product;

      })
    ));
  }, []);


  return (
    <div>
        <h8k-navbar header={title}></h8k-navbar>
        <div className="layout-row shop-component">
            <ProductList 
              products={products}
              addProductToCart={addProductToCart}
              removeFromCart={removeFromCart}
            />

            <Cart cartItem={products}/>
        </div>
    </div>
  );
};

export default App;
