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
               
               <div style={{background:'rgba(41, 97, 188,.4)', width:'80%', height:'100px', margin:'0 auto',marginBottom:'20px',paddingTop:'20px', borderRadius:'90px',boxShadow:'5px 10px rgba(150, 145, 145,.5)'}}>{
                    editting
                    ?
                    <input style={{width:'60%',borderRadius:'90px'}} type="text" value={this.state.text} onChange={this.updateInput} onKeyPress={this.edit}/>
                    :
                    <span style={{margin:'5px'}}>{text}</span>
                }
                <br/>
                <span style={{margin: '5px',marginLeft:'550px'}} onClick={()=> this.setState({editting: !this.state.editting, text})}>Edit</span>
                <br/> <span style={{margin:'5px',marginLeft:'550px'}} onClick={()=> remove(id)}>Delete</span>
                </div>
                
            </div>
        )
    }
}
export default Post