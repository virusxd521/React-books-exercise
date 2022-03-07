import logo from './logo.svg';
import './App.css';
import Books from './components/Books';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import { useState } from 'react';



const App = () =>  {
  
  const [isbnNumber, setIsbn] = useState(0);
  const [inputIsbn, setInput] = useState(0);


  const adddingInputToIsbn = () => {
    setIsbn(parseInt(inputIsbn));
  }

  return (




    
    <div className="App"> 
    {
      isbnNumber === 0 ? 
        <div>
        <label style={{marginBottom:'30px', marginTop:'30px' }}  htmlFor="isbn">Please enter the specific ISBN to get the one that you want</label><br />
        <InputGroup style={{ width: '25rem', margin: 'auto'}} className="mb-3" >

          <FormControl
            aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          // value={isbnNumber}  
          onChange={e => setInput(e.target.value)}
          />
          <Button onClick={adddingInputToIsbn} variant="primary" id="button-addon1">
            Search
          </Button>
        </InputGroup>
        <Books/>
      </div> 
        :
      <div>
        <label style={{marginBottom:'30px', marginTop:'30px' }}  htmlFor="isbn">Please enter the specific ISBN to get the one that you want</label><br />
        <InputGroup style={{ width: '25rem', margin: 'auto'}} className="mb-3">
          <FormControl
            aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          />
          <Button variant="primary" id="button-addon1">
            Search
          </Button>
        </InputGroup>
        <Books isbnNumber_id={isbnNumber}/>
        <Button variant="primary" id="button-addon1">
            Refresh the page  
        </Button>
      </div>
      
    }

    </div>  
  );
}

export default App;
