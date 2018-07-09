import React, {Component} from 'react';

class Post extends Component{
    constructor(props){
        super(props)
        this.state ={
            editting: false,
            text:this.props.text
        }
        this.updateInput = this.updateInput.bind(this)
        this.edit = this.edit.bind(this)
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
                    <span style={{margin:'5px'}}>{text}</span>
                }
                <span style={{margin: '5px'}} onClick={()=> this.setState({editting: !this.state.editting, text})}>Edit</span>
                <span style={{margin:'5px'}} onClick={()=> remove(id)}>Delete</span>
            </div>
        )
    }
}
export default Post