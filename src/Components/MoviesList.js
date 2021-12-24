import React from 'react'
import Card from './Cards'

function MoviesList({Tab,MovieSch,Rating}) {
    return (
        <div>
           <section className='movies-section'>
            {Tab.filter(el=>el.title.toLowerCase().includes(MovieSch.toLowerCase())&&(el.rate>Rating)).map((el,i)=> <Card el={el} key={i} />)}
            </section> 
        </div>
    )
}

export default MoviesList
