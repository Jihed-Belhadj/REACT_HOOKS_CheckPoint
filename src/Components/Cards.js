import React from 'react'
import {Card} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

function Cards({el:{title,description,posterUrl,rate}}) {
    return (
        <div>
          <Card className='movie' style={{width: "400px", height: "700px", marginBottom:"30px"}}>
                <Card.Img  variant="top" src={posterUrl} style={{width: "100%", height: '60%'}} />
                <Card.Body style={{width: "100%", height: '40%'}}>
                    <Card.Title style={{ width: "100%", height: '5%',color:'blue', fontWeight:'Bold'}}>{title}</Card.Title>
                    <Card.Text style={{width: "100%", height: '70%',wordWrap:'break-word', textAlign:'center', textOverflow:'ellipsis'}}>
                        {description}
                    </Card.Text>
                    <ReactStars count={5} size={35} isHalf={true} edit={false} value={rate} style={{width: "10%", height: '5%'}} />
                </Card.Body>
            </Card> 
        </div>
    )
}

export default Cards
