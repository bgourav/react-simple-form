import React from 'react';
import './App.css';
import { Link, withRouter } from 'react-router-dom';

const url = 'https://reqres.in/api/users?page=2';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userData: [],
    };

  }

  componentDidMount() {
  fetch(url,{
  method: 'GET', 
  headers: {
  'Content-Type': 'application/json'
  }
  })
  .then(response => response.json())
  .then(data => {
    this.setState({ userData: data.data })});
  }

  logout=()=>{
    localStorage.clear();
    this.props.history.push("/");
   
  }

  render() {
    const { userData } = this.state;
    return (
      <div>
         
      <div>
        <button className="btnlg" onClick={this.logout}>Logout</button>
      </div>

        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Image</th>
          </tr>
       
        {userData && userData.map(obj =>

            <tr>
              <td>{obj.id}</td>
              <td><Link to={`/detail/${obj.id}`}>{obj.first_name}</Link></td>
              <td>{obj.email}</td>
              <td><img src={obj.avatar}/></td>
            </tr>

        )}
        </table>
      </div>
    );
  }


}
export default withRouter(App);