import React, {Component} from 'react'
import CommentWindow from './CommentWindow'

class Comments extends Component{
    render(){
        return(
            <div>
                <CommentWindow stlye={{margin:'40px'}}/>
            </div>
        )
    }
}
export default Comments