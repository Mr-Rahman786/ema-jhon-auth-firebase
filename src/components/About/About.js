import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContexts';

const About = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h2>Secret about us!!!</h2>
            <p className='abc'>{ user?.email}</p>
        </div>
    );
};

export default About;