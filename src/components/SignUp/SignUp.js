import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/UserContexts';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState(null);

    const { creatUser } = useContext(AuthContext);
    const { singIn } = useContext(AuthContext);
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        
        if (password.length <6) {
            setError('password should be 6 carracter at list');
            return;
        }
        if (password !== confirm) {
            setError('Your password didnt match')
            return;
        }
        // new creat
        creatUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                form.reset()
            })
            .catch(error => {
                console.error(error)
            });
        
        singIn(email, password)
            .then(result => {
            
        })

        
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'> Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <ToastContainer></ToastContainer>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' id='' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' id='' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm"> Confirm Password</label>
                    <input type="password" name='confirm' id='' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already an account <Link to="/login">Log In</Link></p>
            <p className='text-error'>{ error}</p>
        </div>
    );
};

export default SignUp;