import React from 'react';
import './App.css';
import { Link , withRouter} from 'react-router-dom';

class RegisterForm extends React.Component {
    state = {

        email: "",
        password: ""
    }


    handleSubmit = (e) => {

        e.preventDefault();
        const url = 'https://reqres.in/api/register';
        const data = {
            email: this.state.email,
            password: this.state.password
          
        };

        try {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json()).then((res) => {
                if (res.token) {
                    alert("Registration is Successfull.");
                    this.props.history.push("/");

                } else {
                    alert("Oops!! Something went wrong.");
                }
            });

        } catch (error) {
            console.error('Error:', error);
        }
    }


    render() {

        return (

            <div class="form-style-5">
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend><solid> Registration Form</solid></legend>
                        <label>Email:</label>
                        <input type="text" name="email" placeholder="Your Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />

                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />

                        <button className="btn" type="submit">Register</button>

                    </fieldset>
                </form>
                <ul>
                    <li>Already have an Account!  <Link to="/">LogIn</Link></li>
                </ul>
            </div>

        );
    }

}

export default withRouter(RegisterForm);
