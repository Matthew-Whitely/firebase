function StoreFront(props) {
  return (
    <div className="stores">
      <h2>{props.item}</h2>
      <p>{props.make}</p>
      <p>{props.model}</p>
      <p>${props.price}</p>
      <button onClick={props.btnClick}>Click me</button>
    </div>
  );
}

export default StoreFront;
