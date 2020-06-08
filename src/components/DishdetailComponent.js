import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    

function RenderDish({ dish }) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }
function RenderComments({ cmnts }) {
        if (cmnts != null) {
            const comments = cmnts.map(comment => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author},
                        &nbsp;
                            {
                                new Intl.DateTimeFormat('en-US', {
                                    year: 'numeric',
                                    month: 'short',
                                    day: '2-digit'
                                }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                    );
            })

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className='list-unstyled'>
                        {comments}
                    </ul>
                </div>
                
                );
        }
        else {
            return (
                <div></div>
             );
        }
    }


    const DishDetail=(props)=> {
        const dish = props.dish;
        if (dish == null) {
            return (<div></div>);
        }
        
        return (
        
            <div className='row'>
                <RenderDish dish={props.dish} />
                <RenderComments cmnts={props.dish.comments}/>
            </div>
        );
    }


export default DishDetail;