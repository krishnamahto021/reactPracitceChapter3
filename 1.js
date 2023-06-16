let customers = [];
const capacity = 25;
let seatsLeft = 25;
const currentTime = new Date();

let guestCountRef = React.createRef();
let nameRef = React.createRef();
let phoneRef = React.createRef();

// Create form submit handler here
function handleSubmit(event) {
    event.preventDefault();
    seatsLeft = seatsLeft - guestCountRef.current.value;
    let newCustomer = ({
        name:nameRef.current.value,
        phone:phoneRef.current.value,
        guestCount:guestCountRef.current.value
    });
    customers.push(newCustomer);
    console.log(customers);
    rootElement.render(<App />);

}

const Table = () => (
    <table border="1px" style={{ margin: "auto" }}>
    <thead>
        <tr>
            <th>count</th>
            <th>Name</th>
            <th>Phone</th>
            <th>checkIn</th>
            <th>Checkout</th>
            <th>Status</th>
            <th>Remove</th>
        </tr>
    </thead>

    <tbody>

            {customers.map((customer,index)=>(
                <tr key={index}>
                <td>{customer.guestCount}</td>
                <td>{customer.name}</td>
                <td>{customer.phone}</td>
                <td>{currentTime.toLocaleTimeString([], { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' })}</td>
                <td>-</td>
                <td>Remove</td>
                <td>Delete Customer</td>

                </tr>
            ))}

    </tbody>




    </table>
)

const Form = () => (
    <>
        <form onSubmit={handleSubmit}>
            <input type="number" placeholder='Guest Count' ref={guestCountRef} /><br />
            <input type="text" placeholder='Primary Guest Name' ref={nameRef} /><br />
            <input type="number" placeholder='Phone Number' ref={phoneRef} /><br />
            <button type='submit'>Create Entry</button>
        </form>
    </>
)

const App = () => (
    <>
        <div className="App" style={{ textAlign: "center" }}>
            <div>
                <h2>Total Capacity:{capacity} </h2>
                <h2>Seats Left:{seatsLeft} </h2>
            </div>
        </div>
        <Form />
        <Table />
    </>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);