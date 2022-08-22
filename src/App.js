import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import {db} from './index';
import {getFirestore, getDocs, collection} from 'firebase/firestore/lite';



class App extends React.Component {

    constructor() {
      super();
      this.state = {
        products: []
      }
  
    }

     getProduct = async (db) => {
      const cities=collection(db,"products");
      const citysnap= await getDocs(cities);
      const cityList = citysnap.docs.map(doc => doc.data());
      console.log(cityList);
      // return cityList;
      console.log(citysnap)
      console.log(cities);
    }

   //function to change 
 componentDidMount() {
  console.log(db);

  this.getProduct(db);

   }   
  
    handleIncreaseQuantity = async (product) => {
      // console.log('Heyy please inc the qty of ', product);
      // let { products } = this.state;
      // const index = products.indexOf(product);
  
      // const docRef = doc(collection(db, "products"), products[index].id);
      // await updateDoc(docRef, {
      //   qty: products[index].qty + 1,

  
      // });
  
    }
  
  
    handleDecreaseQuantity = async (product) => {
      // console.log('Heyy please inc the qty of ', product);
      // let { products } = this.state;
      // const index = products.indexOf(product);
      // if (products[index].qty !== 0) {
      //   const docRef = doc(collection(db, "products"), products[index].id);
      //   await updateDoc(docRef, {
      //     qty: products[index].qty - 1,
      //   });
      // }
  
    }
  
  
    handleDeleteProduct = (productToDelete) => {
      // const docRef = doc(collection(db, "products"), productToDelete);
      // deleteDoc(docRef)
      //   .then(() => {
      //     console.log("product deleted");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }


    getCartCount = () => {
      const {products}= this.state;

      let count = 0;

      products.forEach((product) => {
        count += product.qty;
      })
      return count;
    }

    getCartTotal = ()  =>{
      const {products} = this.state;

      let cartTotal = 0;
      products.map((product) => {

        if(product.qty > 0){

          cartTotal = cartTotal + product.qty * product.price;

        }

      return '';

      });

      return cartTotal;
    }   

render(){

  const {products} = this.state;
  
  return (

    <div className="App">
     {/* <h1>Cart</h1> */}
     <Navbar count = {this.getCartCount()} />
     <Cart 
      products = {products}
      onIncreaseQuantity = {this.handleIncreaseQuantity}
      onDecreaseQuantity = {this.handleDecreaseQuantity}
      onDeleteProduct = {this.handleDeleteProduct}/>
      <div style= {{padding: 10, fontSize: 20 }}
      >TOTAL: {this.getCartTotal()}</div>
    </div>
      
  );

  }
}

export default App;
