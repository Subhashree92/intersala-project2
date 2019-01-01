import React,{Component} from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
class AddNewUser extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            address:'',
            contact:'',
            email:'',
            image:null
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event) {
        console.log(event.target.name, event.target.value)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault(); 
        const formData={
            image:e.target.elements.image.value,
            username:e.target.elements.username.value,
            address:e.target.elements.address.value,
            contact:e.target.elements.contact.value,
            email:e.target.elements.email.value
        }
        axios.post('http://localhost:3000/users', formData).then((response) => {
                console.log(response.data)
                this.setState({
                    redirectTo: true 
                })
            }).catch((err) => {
                console.log(err.message)
            })
    }
    render(){
        if(this.state.redirectTo === true ) {
            return <Redirect to="/users"/>
        }
        return(
              <div className="container">
              <div className="row">
              <div className="col-md-12">
                <h1>ADD NEW USER</h1>
                </div>
                </div>
                
                <div className="row">
                
                <form onSubmit={this.handleSubmit}>
                <input type="file" onChange={this.handleChange} value={this.state.image} name="image"/><br/>
                <button>Upload</button>
                <div className="col-md-8">
                USERNAME<br/>
                <input type="text" onChange={this.handleChange} value={this.state.username} name="username" placeholder="enter full name"/><br/>
                ADDRESS<br/><input type="text" onChange={this.handleChange} value={this.state.address} name="address" placeholder="enter address"/><br/>
                EMAIL<br/><input type="text" onChange={this.handleChange} value={this.state.email} name="email" placeholder="enter email"/><br/>
                </div>
                <div className="col-md-4">
                CONTACT<br/><input type="text" onChange={this.handleChange} value={this.state.contact} name="contact" placeholder="enter contact"/><br/>
                </div>
                <input type="submit" value="ADD NEW USER" className="button"/>
                </form>
                </div>
                </div>
            
        )
    }
}
export default AddNewUser