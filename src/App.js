import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
  }

  handleSubmit =(e)=> {
   
e.preventDefault();
    const url = 'https://reqres.in/api/login';
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
      }).then(res=> res.json()).then( res=> 
      {
        if(res.token){
          localStorage.setItem('token', res.token);
          this.props.history.push('/dashboard')
          alert("Login Successfully");

        }
      });
          
    } catch (error) {
      console.error('Error:', error);
    }
  }


  render() {

    return (
  
<div className="form-style-5">
<form onSubmit={this.handleSubmit}>
<fieldset>
<legend> Login Form</legend>
<input type="text" name="email" placeholder="Your Email" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}/>
<input type="password" name="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}/>
<button className="btn" type="submit">Log In</button>

</fieldset>

</form>
                <ul>
                    <li>Don't have an Account?  <Link to="/register">SignUp Here</Link></li>
                </ul>
</div>

    );
  }

}

export default withRouter(LoginForm);
