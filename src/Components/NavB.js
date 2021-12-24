import React from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
import StarRating from './StarRating';



function NavB({MovieSch,setMovieSch}) {

    return (
        <div>
            <InputGroup style={{width:'200%'}} >
                <FormControl placeholder="Enter the title" aria-label="Task" aria-describedby="basic-addon2" onChange={e=>setMovieSch(e.target.value)} value={MovieSch}  />
            </InputGroup>  
        </div>
    )
}

export default NavB
