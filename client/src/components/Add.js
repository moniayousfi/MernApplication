import React,{useState} from "react";
import { Button, Divider, Form } from "semantic-ui-react";
import {addContact} from '../js/actions/contacts'
import {useDispatch} from 'react-redux'
import {useHistory} from "react-router-dom"
const Add = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    //useHistory
    const history =useHistory()

    const size = 'large'
    const handleSubmit =(e)=>{
        e.preventDefault();
        dispatch(addContact({name,email,phone}));
        setName('');
        setEmail('');
        setPhone('');
        history.push('/')
    }
return (
    
    <div>
      <Form size={size} key={size} onSubmit={handleSubmit}>
        <Form.Group widths="equal">
            <Form.Field
            label="name"
            control="input"
            value={name}
            placeholder="name"
            onChange={(e)=> setName(e.target.value)}
          />
            <Form.Field
            label="email"
            control="input"
            value={email}
            placeholder="email"
            onChange={(e)=> setEmail(e.target.value)}
          />
          <Form.Field
            label="phone"
            control="input"
            value={phone}
            placeholder="phone"
            onChange={(e)=> setPhone(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
        <Divider hidden />
      </Form>
    </div>
  );
};

export default Add;
