import React, {Component} from 'react';
// import CommentBody from './CommentBody'
import axios from 'axios'

class CommentWindow extends Component{
    constructor(){
        super()
        this.state ={
            messages: [],
            text: '',
            id:0
        }
    }
    componentDidMount(){
        axios.get('/api/comments').then(res =>{
            this.setState({messages:JSON.stringify(res.data)})
        })
    }
    updateVal(val){
        this.setState({text:val})
    }
    CreateComment(){
        const {text} = this.state;
        if(text.length !==0){
        axios.post('/api/comments',{text}).then(res => {
            this.setState({messages:JSON.stringify(res.data)})
        })
        this.setState({text:''})
    }
    }
    updateComment(){
        axios.put('/api/comments/:id').then(res =>{
            this.setState({
                messages:JSON.stringify(res.data)
            })
        })
    }
    deleteComment(){
        axios.delete('/api/comments/:id').then(res =>{
            this.setState({messages: res.data})
        })
    }
    render(){
        
        return(
            <div>   
                    <div style={{width:'60vw', height:'80vh', background:'grey',margin: '0 auto'}}>
                    <input onChange={(e)=> this.updateVal(e.target.value)} type="text" value={this.state.text}/><button onClick={()=> this.CreateComment()}>Enter</button>
                    <div>
                    </div>
                    {this.state.messages}
                    </div>
            </div>
        )
    }
}
export default CommentWindow;