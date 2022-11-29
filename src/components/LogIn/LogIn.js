import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContexts';
import './LogIn.css'
const LogIn = () => {

    // sign in context inmport
    const { singIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location= useLocation
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // sign in user/vistors
        singIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset();
                navigate('/')
            })
            .catch(error => {
                console.error(error);
            })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'> Log in</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' required />
                </div>
                <input className='btn-submit' type="submit" value="Log In" />
            </form>
            <p>New to ema jhon ? <Link to="/signup">Create a new account</Link></p>
        </div>
    );
};

export default LogIn;