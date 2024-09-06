import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropsDataType from 'prop-types';
import React, { useState } from 'react';


export default function ContactForm(propsName) {
    const [emailVar, setEmailValue] = useState('abc@gmail.com');
    const [fullNameVar, setFullName] = useState('amey aatil');
    const [textareaVar, setTextarea] = useState('');

    const handleEmailChange = (e1) => {
        setEmailValue(e1.target.value);
    };
    const handleFullNameChange = (e) => {
        setFullName(e.target.value);
    };
    const handleTextareaChange = (event) => {
        setTextarea(event.target.value);
    };

    const changeToReset = () => {
        // document.querySelector('#formBasicTextarea').value = '';
        setEmailValue('');
        setFullName('');
        setTextarea('');
    };

    const changeStrToUppercase = () => {
        let tempNameVal = document.querySelector('#formUserName').value;
        let capitalizedStr = tempNameVal.replace(/\b\w/g, (char) => char.toUpperCase());
        setFullName(capitalizedStr);
        console.log('tempval',tempNameVal);
        console.log('capival',tempNameVal);
    }
  return (
    <div>
        <h2 className='text-center mb-3 text-primary'>{propsName.titleForContact}</h2>
        <Form>
            <Form.Group className="mb-3" controlId="formUserName">
                <Form.Label> Full Name </Form.Label>
                <Form.Control type="text" value={fullNameVar} placeholder="Enter full name" onChange={handleFullNameChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> <span className="text-danger">State Name Here is:</span> Your Email</Form.Label>
                <Form.Control type="email" value={emailVar} onChange={handleEmailChange} placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTextarea">
                <Form.Label>Comment</Form.Label>
                <Form.Control as="textarea" value={textareaVar} onChange={handleTextareaChange} placeholder="Type here..." />
            </Form.Group>
    
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        <div className="char-case">
            <Button className='mt-2 me-2' variant="danger" onClick={changeToReset} >
                Reset
            </Button>
            <Button className='mt-2' variant="warning" onClick={changeStrToUppercase} >
                Uppercase Fullname
            </Button>
        </div>

        <div className="tally-data mt-2">
            <h3>Yor comment summary</h3>
            <p>{ textareaVar === null || textareaVar.trim() === '' ? '0' : (textareaVar.trim().split(/\s+/)).length} words and {textareaVar.trim().length} characters</p>
            <p className="read-time text-success">Reading time for comment: {(textareaVar.trim().length)*0.008}min</p>
        </div>

        <div className="preview text-muted">
            <pre>{textareaVar}</pre>
        </div>
        
    </div>
  )
}


ContactForm.propTypes = {
    titleForContact: PropsDataType.string.isRequired,
}
// ContactForm.defaultProps = {
//     titleForContact: "Section Title",
// }


