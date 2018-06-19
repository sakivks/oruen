import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import cardLayout from './CommentsLayout';


export default class Comment extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state={
			'commentBox':'',
			commentList:['hello','its me']
		}
	}
	handleChange(e){
		this.setState({
			'commentBox' : e.target.value
		});
	}
	handleSubmit(){
		var comments = this.state.commentList;
		comments.push(this.state.commentBox);
		this.setState({
			'commentList':comments,
			'commentBox':''
		});
	}
  	render() {
  		const { classes } = this.props;
    		return (
		      	<div>
		        <TextField
		          id="multiline-flexible"
		          multiline
		          rows="4"
		          placeholder="Enter a comment here"
		          value={this.state.commentBox}
		          onChange={this.handleChange}
		          style={{width:'60%','backgroundColor':'#ddd'}}
		          margin="normal"
		        />
		        <br/>
		        <Button
                    variant="raised"
                    color="primary"
                    onClick={this.handleSubmit}
                    >Comment
                 </Button>
                 <br/>
                 <br/>
                 <div>
                 	{cardLayout(this.state.commentList)}		
				 </div>
			         
		      </div>
    	)
  	}
}

