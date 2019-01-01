import React,{Component} from 'react';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'
  class user extends Component{
      constructor(){
          super();
          this.state={
              user:[]
          }
          this.displayuser=this.displayuser.bind(this)
      }
      componentDidMount(){
        axios.get('http://localhost:3000/users').then((Response)=>{
            this.setState({
                user:Response.data
            });
        }).catch((err)=>{
            console.log(err);
        })
    }
      displayuser(){
          return(
              <div>
                  <h1>USER DIRECTORY</h1>
                  <table border="1">
                  <thead>
                      <tr>
                          <th>IMAGE</th>
                          <th>USERNAME</th>
                          <th>ADDRESS</th>
                          <th>CONTACT</th>
                          <th>EMAIL</th>
                          </tr>
                      </thead>
                    <tbody>
                    {this.state.user.map((i,index)=>{
                            return <UserDetails user={i} key={index}/> 
                
                        })}
                        </tbody>
                      </table>
              </div>
          )
      }
      render(){
          return(
              <div>
                  {this.displayuser()}
                  </div>
          )
      }
  }
  class UserDetails extends Component{
      render(){
          return(
              <tr>
                  <td>{this.props.user.image}</td>
                  <td>{this.props.user.username}</td>
                  <td>{this.props.user.address}</td>
                  <td>{this.props.user.contact}</td>
                  <td>{this.props.user.email}</td>
              </tr>
          )
      }
  }
  export default user