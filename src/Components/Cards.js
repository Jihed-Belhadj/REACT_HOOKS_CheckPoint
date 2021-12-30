import React from 'react'
import {Card,Button} from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import CardsEdit from './CardsEdit';


function Cards({el, setTab,Tab}) {

    // const deleteMovie = (x)=>{ Tab.filter(el=>el.id!=x)}
      const y =(x)=>setTab(Tab.filter(el=>el.id!=x))

    return (
        <div>
          <Card className='movie' style={{width: "400px", height: "700px", marginBottom:"30px"}}>
                <Card.Img  variant="top" src={el.posterUrl} style={{width: "100%", height: '40%'}} />
                <Card.Body style={{width: "100%", height: '40%'}}>
                    <Card.Title style={{ width: "100%", height: '3%',color:'blue', fontWeight:'Bold'}}>{el.title}</Card.Title>
                    <Card.Text style={{width: "100%", height: '50%',wordWrap:'break-word', textAlign:'center', textOverflow:'ellipsis'}}>
                        {el.description}
                    </Card.Text>
                    <ReactStars count={5} size={35} isHalf={true} edit={false} value={el.rate} style={{width: "10%", height: '5%'}} />
                    
                </Card.Body>
                <div style={{display:"flex", justifyContent:"space-around",width: "100%", height: '5%'}}>
                <CardsEdit el={el} Tab={Tab} setTab={setTab}></CardsEdit>
                <Button variant="primary" onClick={()=>y(el.id)} >Delete</Button>

                </div>
                
            </Card> 
        </div>
    )
}

export default Cards
