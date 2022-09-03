import React, { Component } from 'react';
class App extends Component {
    state = {  
        todos:[
            {id: 1, title:'web dev', done: false}, 
            {id: 2, title:'web dev', done: false} 
        ]
}
    render() { 
        return ( 
            <>
                <main className="container">
                </main>
            </>
        );
    }
}
 
export default App;