function Cart(props) {
  return (
    <div>
      <p>{props.key}</p>
      <p>{props.make}</p>
      <p>{props.key}</p>
      <button onClick={props.remove}>remove</button>
    </div>
  );
}

export default Cart;
