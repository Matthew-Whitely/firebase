import { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase.js";
import StoreFront from "./StoreFront";
// import Cart from "./Cart";
function App() {
  const [equipment, setFarmEquipment] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const handleCartItem = (item) => {
    const dbRef = firebase.database().ref("Cart");
    dbRef.push(item);

    dbRef.on("value", (response) => {
      const cart = [];
      const itemsInCart = response.val();

      for (let key in itemsInCart) {
        cart.push({
          key: key,
          item: itemsInCart[key].item,
        });
        setCartItem(cart);
      }
    });
  };

  const removeItem = (remove) => {
    const dbRef = firebase.database().ref("Cart");
    dbRef.child(remove).remove();
  };

  useEffect(() => {
    const dbRef = firebase.database().ref();
    dbRef.on("value", (response) => {
      const storeFront = [];
      const tractorData = response.val().StoreFront;

      for (let key in tractorData) {
        storeFront.push({
          key: key,
          item: tractorData[key],
        });
      }

      setFarmEquipment(storeFront);
    });
  }, []);

  return (
    <div className="App">
      <h1>Farm Equipment</h1>
      <section className="equpiment">
        {equipment.map((equip) => {
          return (
            <StoreFront
              make={equip.item.Make}
              model={equip.item.Model}
              price={equip.item.price}
              item={equip.key}
              btnClick={() => {
                handleCartItem(equip);
              }}
            />
          );
        })}
      </section>
      <section className="cart">
        <h2>This is the cart</h2>
        {cartItem.map((e) => {
          return (
            <div>
              <p>{e.key}</p>
              <p>{e.item.Make}</p>
              <p>{e.item.price}</p>
              <button
                onClick={() => {
                  removeItem(e.key);
                }}
              >
                Remove
              </button>
            </div>
          );
          // <Cart
          //   make={e.item.Make}
          //   key={e.key}
          //   rmeove={() => {
          //     removeItem(e.key);
          //   }}
          // />
        })}
      </section>
    </div>
  );
}

export default App;
