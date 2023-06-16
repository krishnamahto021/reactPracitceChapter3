let marks = [];
let names = [];

function handleNameInput(event) {
    names.push(event.target.value);
}

function handleMarksInput(event) {
    marks.push(event.target.value);
}

function handleSubmit(event) {
    event.preventDefault();
    rootElement.render(<App />);
}




const TableOfStudents = () => (
    <>
        <table border='1px'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Marks</th>
                </tr>
            </thead>

            <tbody>
                {names.map((value, index) => (
                    <tr key={index}>
                        <td>{value}</td>
                        <td>{marks[index]}</td>
                    </tr>

                ))}
            </tbody>
        </table>
    </>
)

const Form = () => (
    <>
        <form onSubmit={handleSubmit} >
            <input type="text" placeholder='Enter name of student' onBlur={handleNameInput} />
            <input type="number" placeholder='Enter marks' onBlur={handleMarksInput} />
            <button type='submit'>Submit</button>
        </form>
    </>
)

const App = () => (
    <>
        <h1>Student's Form</h1>
        <Form />
        <TableOfStudents />
    </>
)




const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);