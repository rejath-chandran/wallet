import React,{useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegisterForm() {
    const ref = useRef(null);
    const submitHandler = (e) => {

        e.preventDefault();
        const element = ref.current;
        element.reset()
        console.log("working")
    }    
  return (
    <Form ref={ref} onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>EMAIL</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>


     <Form.Group className='md-3' controlId='formUsername'>
     <Form.Label>USER NAME</Form.Label>
      <Form.Control type="text" placeholder="Enter username" />
     </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>PASSWORD</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>

   
    <Button variant="primary" type="submit">
      Submit
    </Button>

  </Form>
  )
}
