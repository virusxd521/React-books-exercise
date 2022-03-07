import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import data from '../books.json';
import 'bootstrap/dist/css/bootstrap.min.css';
const Book = ({isbnNumber_id}) => {

  const items = data.map(item => {
        const {author, description, pages, isbn} = item;
        console.log('sssss', isbnNumber_id);
        return (
        <Card key={isbn} border="secondary" style={{ width: '18rem', margin:'auto' , marginTop:'20px', minHeight: '500px' }}>
            <Card.Header>{author}</Card.Header>
            <Card.Body>
              <Card.Title>Pages {pages}</Card.Title>
              <Card.Text>
                  ISBN: {isbn} <br/>
                  {description}
              </Card.Text>
              <Button style={{marginTop: '25%'}} variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        )
  });
  

 return (
  <>
  {items}
  </>  
 )
}

export default Book;