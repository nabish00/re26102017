import React, { Component } from 'react';

class Signup extends Component {

    state = {
        data : {
            FirstName: '',
            LastName: '',
            Username: '',
            Email: '',
            Password: '',
            PasswordConfirm: ''
        },
        loading : false,
        errors: {}
    };

    onChange(e) {
        this.setState({
            ...this.state.data,
            [e.target.name]: e.target.value
        })
    };

    onSubmit() {

    }


    render() {
        const { data } = this.state;
        return (

            <div>
                <form className="form-horizontal" onSubmit={this.onSubmit}>
                    <fieldset>
                        <div id="legend">
                            <legend className>Register</legend>
                        </div>
                        <div className="control-group">
                            {/* First Name */}
                            <label className="control-label" htmlFor="username">Username</label>
                            <div className="controls">
                                <input type="text"
                                       id="FirstName"
                                       name="FirstName"
                                       placeholder="First Name"
                                       value={data.email}
                                       onChange={this.onChange.bind(this)}
                                       className="input-xlarge" />

                            </div>
                        </div>
                        <div className="control-group">
                            {/* Last Name */}
                            <label className="control-label" htmlFor="username">Username</label>
                            <div className="controls">
                                <input type="text"
                                       id="LastName"
                                       name="LastName"
                                       placeholder="Last Name"
                                       value={data.email}
                                       onChange={this.onChange.bind(this)}
                                       className="input-xlarge" />
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Username */}
                            <label className="control-label" htmlFor="username">Username</label>
                            <div className="controls">
                                <input type="text"
                                       id="Username"
                                       name="Username"
                                       placeholder="Username"
                                       value={data.email}
                                       onChange={this.onChange.bind(this)}
                                       className="input-xlarge" />
                                <p className="help-block">Username can contain any letters or numbers, without spaces</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* E-mail */}
                            <label className="control-label" htmlFor="email">E-mail</label>
                            <div className="controls">
                                <input type="email"
                                       id="Email"
                                       name="Email"
                                       placeholder="Email Address"
                                       value={data.email}
                                       onChange={this.onChange.bind(this)}
                                       className="input-xlarge" />
                                <p className="help-block">Please provide your E-mail</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Password*/}
                            <label className="control-label" htmlFor="password">Password</label>
                            <div className="controls">
                                <input type="password"
                                       id="Password"
                                       name="Password"
                                       placeholder="Password"
                                       value={data.email}
                                       onChange={this.onChange.bind(this)}
                                       className="input-xlarge" />
                                <p className="help-block">Password should be at least 4 characters</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Password */}
                            <label className="control-label" htmlFor="password_confirm">Password (Confirm)</label>
                            <div className="controls">
                                <input type="password"
                                       id="PasswordConfirm"
                                       name="PasswordConfirm"
                                       placeholder="Confirm Password"
                                       value={data.email}
                                       onChange={this.onChange.bind(this)}
                                       className="input-xlarge" />
                                <p className="help-block">Please confirm password</p>
                            </div>
                        </div>
                        <div className="control-group">
                            {/* Button */}
                            <div className="controls">
                                <button className="btn btn-success">Register</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default Signup;