const quotes = [];

let quoteRef = React.createRef();
let nameRef = React.createRef();


function handleSubmit(event){
    event.preventDefault();
    let newQuote = ({
        name:nameRef.current.value,
        quote:quoteRef.current.value
    });
    quotes.push(newQuote);
    rootElement.render(<App/>);
}

const clearInputs = () => {
  nameRef.current.value = "";
  quoteRef.current.value = "";
};

const Form = () => (
    <>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Quote' ref={quoteRef} />
            <input type="text" placeholder='Name' ref={nameRef} />
            <button type='submit'>Submit</button>
        </form>
    </>
)

// create handleQuote function here

const App = () => (
  <div className="App">
    <h2>Quotify</h2>
    <Form/>
    <div className="quotes">
      {quotes.map((q, i) => (
        <div key={i}>
          <i>"{q.quote}"</i>
          <b>~ {q.name}</b>
        </div>
      ))}
    </div>
  </div>
);

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);