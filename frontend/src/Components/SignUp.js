import React, { useState } from 'react'

const SignUp = () =>
{
    const [ name, setName ] = useState( '' );
    const [ email, setEmail ] = useState( '' );
    const [ password, setPassword ] = useState( '' );

    const handleNameChange = ( e ) =>
    {
        setName( e.target.value );
    };
    const handleEmailChange = ( e ) =>
    {
        setEmail( e.target.value );
    };

    const handlePasswordChange = ( e ) =>
    {
        setPassword( e.target.value );
    };

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        // Perform signup logic here (e.g., send data to server)
        console.log( 'Signup submitted:', email, password );
        // Reset form fields
        setEmail( '' );
        setPassword( '' );
    };
    return (
        <div className='signup'>
            <div className="signup-container">
                <h2>Signup</h2>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                        />
                    </div>
                    <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
