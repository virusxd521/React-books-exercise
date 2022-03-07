import Book from "./Book";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Books = () => {
    return (
        <div style={{ display:'flex', width: '80%', margin:'auto', flexWrap:'wrap', marginBottom:'40px' }}>
            <Book />
        </div>
    )
}

export default Books;