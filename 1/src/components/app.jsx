import React, { Component } from 'react';

import Navbar from './navbar';
import { Redirect, Route, Switch } from 'react-router';


import NotFound from './pages/notFound';

import axios from 'axios';
import TodoList from './pages/todoList';
import TODOForm from './pages/todoForm';
import { toast } from 'react-toastify';

class App extends Component {
    state = { 
        todos:[]
    }     
    APIURL='http://127.0.0.1:5000/todos'
    async componentDidMount(){
        const {data}  = await axios.get(this.APIURL)
        //console.log('get request', data);
        this.setState({todos: data})
    }

    handleDelete = async (t) => {
        const oldTodos = [...this.state.todos];
    
        //State
        //Clone
        //Edit 
        const todos = this.state.todos.filter((s) => s.id !== t.id);
        //Set state
        this.setState({ todos });
    
        try {
          //Call B
            await axios.delete( `${this.APIURL}/${t.id}` );
        } catch (ex) {
            toast("Cant Delete");
            this.setState({ todos: oldTodos });
        }
    };

    handleInsert = async(t) => {
        const oldTodos = [...this.state.todos];
        console.log('Inserting...', t);
    
        //State
        //Clone
        //Edit 
        this.state.todos.push(t) 
        const todos = this.state.todos       
        console.log('state todos', this.state.todos);
        console.log('old', oldTodos)
        console.log('after pushing', t);
        console.log('new', todos)


        //Set state
        this.setState({ todos: todos });
    
        try {
            //Call B
            const obj = t
            await axios.post( `${this.APIURL}`, obj );
        } catch (ex) {
            toast("Cant Insert")
            this.setState({ todos: oldTodos })
        } 
        
    }

    handleEdit = async(t) => {
        const oldTodos = [...this.state.todos];
        console.log('Editing...', t);
    
        //State
        //Clone
        //Edit 
        this.state.todos.push(t) 
        const todos = this.state.todos       
        console.log('state todos', this.state.todos);
        console.log('old', oldTodos)
        console.log('after pushing', t);
        console.log('new', todos)


        //Set state
        this.setState({ todos: todos });
    
        try {
            //Call B
            const obj = t
            await axios.patch( `${this.APIURL}`, obj );
        } catch (ex) {
            toast("Cant Insert")
            this.setState({ todos: oldTodos })
        } 
        
    }



    cloneReturnSingle=(prod)=>{
        const prods = [...this.state.todos]
        const idx = prods.indexOf( prod)
        return prods[idx]
    }
    
    render() { 
        return ( 
            <>
            <Navbar
                numTODO={this.state.todos.length}/>
            <main className="container">
                <Switch>
                    <Route path='/todos' render={ (props) => 
                        <TodoList
                            {...props}
                            todos={this.state.todos}
                            onDelete={this.handleDelete}
                            onInsert={this.handleInsert}
                            onEdit={this.handleEdit}

                        />
                    }  />

                    <Route path='/todoform/:id' component={TODOForm} />
                    

                    <Route path='/notfound' component={NotFound} />
                    {/* <Redirect to='/notfound'  /> */}

                </Switch>

                {/*  */}
            </main>
            </>
        );
    }
}
 
export default App;