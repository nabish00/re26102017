import React from 'react';
import { Route,Link } from 'react-router-dom';
import signupForm from '../Signup/SignupForm';

const HomePage = () => {
    return (
        <div>
            <Link to="/signup">Sign up</Link>,
            <Route path="/signup" exact component={signupForm} />
        </div>
    )
};
export default HomePage;