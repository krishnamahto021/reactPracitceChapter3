const traffic = [0,0,0,0]; // index 0 is for car and so on

function handleIncrease(index){
    traffic[index]++;
    rootElement.render(<App/>)
}

function handleDecrease(index){
    if(traffic[index]<=0){
        window.alert('No Vehicles in parking!');
    }else{
        traffic[index]--;
    }
    rootElement.render(<App/>);

}



const App = () => (
    <>
      <p>List of all the vehicles count in the parking.</p>
      <ol>
        <li>
          <p>
            <b>Car:{traffic[0]} </b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick={()=>handleIncrease(0)}>Increase</button>
            <button onClick={()=>handleDecrease(0)}>Decrease</button>
          </p>
        </li>
        <li>
          <p>
            <b>Bike:{traffic[1]} </b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick={()=>handleIncrease(1)}>Increase</button>
            <button onClick={()=>handleDecrease(1)}>Decrease</button>
          </p>
        </li>
        <li>
          <p>
            <b>Scooty:{traffic[2]} </b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick={()=>handleIncrease(2)}>Increase</button>
            <button onClick={()=>handleDecrease(2)}>Decrease</button>
          </p>
        </li>
        <li>
          <p>
            <b>Bicycle:{traffic[3]} </b> &emsp;
            {/* Add increase and decrease count buttons here */}
            <button onClick={()=>handleIncrease(3)}>Increase</button>
            <button onClick={()=>handleDecrease(3)}>Decrease</button>
          </p>
        </li>
      </ol>
    </>
  );

  const rootElement = ReactDOM.createRoot(document.getElementById("root"));
  rootElement.render(<App />);