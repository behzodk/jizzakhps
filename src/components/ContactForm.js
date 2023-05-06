import './ContactFormStyles.css';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Alert, Button, Space } from 'antd';

function ContactForm() {
    const form = useRef();
    const [isAlert, setIsAlert] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    
    function handleChange1(e) {
        setInput1(e.target.value);
      }
    function handleChange2(e) {
        setInput2(e.target.value);
    }
    function handleChange3(e) {
        setInput3(e.target.value);
    }

    const [textareaValue, setTextareaValue] = useState('');

    function handleChange(e) {
        setTextareaValue(e.target.value);
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gbf0rc4', 'template_iz3nss1', form.current, 'MnM-VJi113dLKCNNW').then((result) => {
            setIsAlert(true);
            setInput1('');
            setInput2('');
            setInput3('');
            setTextareaValue('');
            setTimeout(() => {
                setIsAlert(false);
              }, 3000);
        }, (error) => {
            alert(error.text);

        });
    };
    return(
        <div className='form-container'>
            <div className="alert-e">
                {isAlert ? (
                    <Space
                    direction="vertical"
                    style={{
                      width: '100%',
                    }}
                  >
                    <Alert
                        message="Success Tips"
                        type="success"
                        showIcon
                        action={
                            <Button size="small" type="text">
                            UNDO
                            </Button>
                        }
                        closable
                    />
                  </Space>
                ): (<div></div>)}
            </div>
            <h1>Send a message to us!</h1>
            
            <form ref={ form } onSubmit={sendEmail} netlify>
                <input value={input1} onChange={handleChange1} className='in' name="user_name" type='text' placeholder='Name'/>
                <input value={input2} onChange={handleChange2} className='in' type='emil' placeholder='Email'/>
                <input name='user_email' value='behzodmusurmonqulov@gmail.com' type='hidden'/>
                <input value={input3} onChange={handleChange3} className='in' name='subject' type='text' placeholder='Subject'/>
                <textarea value={textareaValue} onChange={handleChange} name='text' placeholder='Message' rows="4"></textarea>
                <button type='submit' name='send' value="Send">Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm
