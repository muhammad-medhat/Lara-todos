import axios from 'axios';
import React, { Component } from 'react';
class TODOForm extends Component {
    //APIURL = 'http://localhost:5000/todos'
    state = { id:'', name: '', content: '', prog: 0, done: false  }
    submitForm = (e)=>{
        e.preventDefault()
        console.log('props todo form', this.props);
        const id = this.props.match.params.id
        if (this.validate()) {
            console.log('Submiting...', this.state)
            if(id !== 'new'){
                //Editing               
                this.editTodo()
            } else{ 
                //Adding
                this.addTodo()
            }
            this.props.history.replace('/todos')
            // 
        }
        
    }
    // async componentDidMount(){
    //     const id = this.props.match.params.id
    //     if(id !== 'new'){
    //         const {data} = await axios.get(`${this.APIURL}/${id}`)
    //         this.setState({...data})
    //         console.log('componentDidMount state', this.state)
    //     }
    // }
    handleChange = (e) =>{
        let st = {...this.state}
        // console.log('OnChange', e);
        // console.log('OnChange', st);
        st[e.currentTarget.name] = e.currentTarget.value        
        this.setState(st)
    }
    validate =  ()=>{return true}


    addTodo = async () => {
        const obj = {...this.state}
        await axios.post(this.APIURL, obj)
    }
    editTodo = async () => {
        const id = this.props.match.params.id

        const obj = {...this.state, done: false}
        delete obj.id
        await axios.patch(`${this.APIURL}/${id}`, obj)    }
    render() { 
        const id = this.props.match.params.id
        console.log ('todo form', this.state)
        let heading = ''   
        console.log('props', this.props);

        if(id !== 'new'){
            heading = `Edit Todo (${id})`
            //this.setState({name:})
        } else{
            heading = 'Add Todo'
        }
        
        return ( 
            <>
                <h1>{heading}</h1>

                <form>
                    <div className="form-group">
                        <label htmlFor="txtName">Todo Name</label>
                        <input type="text" className="form-control"
                            id="txtName" 
                            name="name"
                            placeholder="Enter Name"
                            onChange={this.handleChange}
                            value={this.state.title}  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtPrice">Price</label>
                        <input type="number" className="form-control" 
                            id="txtPrice" 
                            name="price" 
                            placeholder="Price"
                            onChange={this.handleChange}
                            value={this.state.price}  />

                    </div>
                    <button type="submit" className="btn btn-primary" onClick={this.submitForm}>Submit</button>
                </form>
            </>
          );
    }
}
 
export default TODOForm;