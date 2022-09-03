import React, { Component } from 'react';
import  Joi  from 'joi-browser'
class Login extends Component {
    state = {  
        username: '', 
        password: '', 
        errors:{}
    }
    schema={
        username: Joi.string().required(), 
        password: Joi.string().required()
    }

    handleChange = (e) =>{
        let st = {...this.state}
        console.log('OnChange', st);
        st[e.currentTarget.name] = e.currentTarget.value        
        this.setState(st)
    }
    validate = ()=>{
        console.log('Validating...')

        const err = Joi.validate(this.state, this.schema, {abortEarly: false})
        console.log(err)
        
        // const errors={}
        // if(this.state.username.trim()===''){
        //     errors.username = 'Username required'
        // }
        // if(this.state.password.trim()===''){
        //     errors.password = 'Password required'
        // }
        // this.setState({errors})
        // return errors.length>0        
    }
    //username=React.createRef()
    submitForm = (e)=>{
        e.preventDefault()
        if (this.validate()) {
            console.log('Submit...');
        }
        
        //console.log(this.username.current.value)
    }
    render() { 
        return ( <>
            <form onSubmit={this.submitForm} className="form-signin">
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                {/* <input ref={this.username} type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" /> */}
                <input name='username' 
                    value={this.state.username} 
                    onChange={this.handleChange}
                    type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
                {this.state.errors.username && 
                    (<div className="alert aleert-danger">
                        {this.state.errors.username}
                    </div>)}



                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input name='password' 
                    value={this.state.password} 
                    onChange={this.handleChange}
                    type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
                {this.state.errors.password && 
                    (<div className="alert aleert-danger">
                        {this.state.errors.password}
                    </div>)}                
                    
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </> );
    }
}
 
export default Login;