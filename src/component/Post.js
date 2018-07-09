import React, {Component} from 'react';

class Post extends Component{
    constructor(props){
        super(props)
        this.state ={
            editting: false,
            text:this.props.text
        }
    }
    updateInput(event){
        this.setState({text:event.target.value})
    }
    edit( event ){
        const {text} = this.state;
        const {id, edit} = this.props;
        if(event.key === "Enter" && text.length !== 0){
            edit(id,text);
            this.setState({editting:false})
        }
    }
    render(){
        const {id,text,remove} = this.props;
        const {editting} = this.state;
        console.log(id,text)
        return(
            <div>
                {
                    editting
                    ?
                    <input type="text" value={this.state.text} onChange={this.updateInput} onKeyPress={this.edit}/>
                    :
                    <span>{text}</span>
                }
                <span onClick={()=> this.setState({editting: !this.state.editting, text})}></span>
                <span onClick={()=> remove(id)}>Delete</span>
            </div>
        )
    }
}
export default Post