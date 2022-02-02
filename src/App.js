import './App.css';
import { Button, Alert, Breadcrumb, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Velkommen</h1>
        <Form>
          <Form.Group controlId="formEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Example@email.com"/>
            <Form.Text className="text-muted">
              We'll never share your email address, trust us!
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"/>
            <Button className="mb-4 mt-2" variant="secondary" type="submit">Login</Button>
          </Form.Group>
        </Form>

        <Card className="mb-3" style={{color: "#000"}}>
          <Card.Img src="https://picsum.photos/200/100"/>
          <Card.Body>
            <Card.Title>
              Card Example
            </Card.Title>
            <Card.Text>
              This is an example of react bootstrap cards.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
        <Breadcrumb variant="secondary">
          <Breadcrumb.Item>Test 1</Breadcrumb.Item>
          <Breadcrumb.Item active>Test 2</Breadcrumb.Item>
          <Breadcrumb.Item>Test 3</Breadcrumb.Item>
        </Breadcrumb>
        <Alert variant="success">Below is a button</Alert>
        <Button className="mb-3">Test Button</Button>
      </header>
    </div>
  );
}

export default App;