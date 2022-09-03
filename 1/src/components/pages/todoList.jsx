// import axios from 'axios';
import React ,{ Component} from 'react';
// import SingleTask from './singleTask';
import EditableLabel from 'react-inline-editing';

class TodoList extends Component {
    state = {id:'',  name: '', content: '', prog: 0, done: false }
    APIURL='http://127.0.0.1:5000/todos'

    addTodo = (e) =>{
        // console.log('tttt ',this.props)
        // this.props.history.push('todoform/new')
            e.preventDefault()
            console.log('props insert', this.props)

            const t = this.state
            console.log('insert', t);
            this.props.onInsert(t)
 
    

    }
    editTODO = (t)=>{
        console.log('edit', t)
        this.props.history.replace(`/todoform/${t.id}/${t.title}`)
    }
    handleChange = (e) =>{
        let st = {...this.state}
        st[e.currentTarget.name] = e.currentTarget.value        
        this.setState(st)
        console.log('OnChange', st);
    }
    _handleFocus(e){
        console.log('Handle focus', e)
    }
    _handleFocusOutName(t){
        console.log(this.state)
    }
    _handleFocusOutContent(t){
        console.log(t)
    }
    render() {         

        const props = this.props
        console.log('props in todolist', props)
        const{onDelete, onInsert, onEdit, todos} = props
        console.log('todoa list', typeof(todos));
        // console.log('onIns', onInsert);
        return (  
        <>
        <h1>Todo List Page</h1>

            <form className='border1'>
            <div className="form-group">
                <label htmlFor="exampleFormControlInput1">Task Name</label>
                <input type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    placeholder="Task Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" 
                    id="content" 
                    name="content" 
                    rows="3"  
                    value={this.state.content}                           
                    onChange={this.handleChange}></textarea>
            </div>        
            <button className="btn btn-primary"
                onClick={()=>onInsert(this.state)}
                >Add New Task </button>
            </form>




        <table className="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Content</th>
                <th scope="col">...</th>
                <th scope="col">...</th>
                </tr>
            </thead>
            <tbody>
            {
                    props.todos.map( t => {
                    return(
                        <tr key={t.id}>

                            <td>{t.id}</td>
                            <td>
                                <EditableLabel                                 
                                    text={t.name}
                                    onFocus={this._handleFocus}
                                    onFocusOut={this._handleFocusOutName}
                                        />
                            </td>
                            <td>
                                <EditableLabel 
                                    text={t.content}
                                    onFocus={this._handleFocus}
                                    onFocusOut={this._handleFocusOutContent}
                                        />
                            </td>
                            <td>
                                <input className="form-check-input" type="checkbox" value={t.done} id="flexCheckDefault" />
                            </td>
                            <td>
                                {/* <i className="fas fa-edit" onClick={()=>this.editTODO(t)}></i> */}
                                <i className="fas fa-edit" onClick={()=>onEdit(t)}></i>
                            </td>
                            <td><i className="far fa-trash-alt" onClick={()=>onDelete(t)}></i></td>
                            {/* <SingleTask
                                {...props}
                                onDeleteTodo={()=>this.handleDelete(t)}
                                todo={t} /> */}
                        </tr>
                    )

                })
            }
            </tbody>
            </table>
        </>
    );
    }
}
export default TodoList;