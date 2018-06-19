import React, { Component } from 'react';
import {Card} from 'components';
import CardContent from 'material-ui/Card';
export default function commentsLayout(commentList){
	console.log('got comments',commentList);
	return(
		commentList.map(function(comment,i){
			return(
				<Card >
			      <CardContent style={{'padding':"20px"}}>
			      	{comment}
			      </CardContent>
	    		</Card>
	        	);
			})
		);
	}
