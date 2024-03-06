import React, { useState } from 'react';

const FormComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '300px',
        margin: '0 auto',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    };

    const boxStyle = {
        border: '1px solid #000',
        padding: '10px',
        marginTop: '20px',
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input style={inputStyle} type="text" id="firstName" name="firstName" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} />
                <input style={inputStyle} type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                <input style={inputStyle} type="email" id="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input style={inputStyle} type="number" id="age" name="age" placeholder="Age" onChange={(e) => setAge(e.target.value)} />
                <input style={inputStyle} type="submit" value="Submit" />
            </form>
            {submitted && (
                <div style={boxStyle}>
                    <p>First Name: {firstName?firstName:""}</p>
                    <p>Last Name: {lastName?lastName:""}</p>
                    <p>Email: {email?email:""}</p>
                    <p>Age: {age?age:""}</p>
                </div>
            )}
        </>
    );
};

export default FormComponent;
