import React,{Component} from 'react';
import axios from 'axios';
import Post from './Post';

class CommentWindow extends Component{
    constructor(props){
        super(props)
        this.state ={
            message: [],
            text:''
        }
        this.userInput = this.userInput.bind(this);
        this.createComment = this.createComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.deleteComment = this.deleteComment.bind(this)
    }
    componentDidMount(){
        axios.get('/api/comments').then(res =>{
            this.setState({message:res.data})
        })
    }
    userInput(event){
        this.setState({text:event.target.value})
    }
    createComment(event){
        const {text} = this.state
        if(event.key === 'Enter' && text.length !==0){
        axios.post('/api/comments', {text}).then(res =>{
            this.setState({message:res.data})
        })
    }
        this.setState({text: ''})
    }
    editComment(id,text){
        console.log(`editMessage: ${id},${text}`)
        axios.put(`/api/comments/${id}`).then(res =>{
            this.setState({message:(res.data)})
        })
    }
    deleteComment( id ){
        axios.delete(`/api/comments/${id}`).then(res=>{
            this.setState({message:(res.data)})
        })
    }
    render(){
        console.log(this.state)
        console.log(Array.isArray(this.state['message']))
        return(
        <div>
            <div>
            {
                this.state.message.forEach(e=> (
                <Post style={{width:'80vw', height:'20vh',background:'red'}} key={e.id} id={e.id} text={JSON.stringify(e.text)} edit={this.editComment} delete={this.deleteComment}/>
                ))
                
            }
            </div>
            <div>
                <input 
                onKeyPress={this.createComment}
                onChange={this.userInput} 
                type="text" 
                placeholder='Enter Comment Here' 
                />
            </div>
        </div>
    )
    }
}
export default CommentWindow
