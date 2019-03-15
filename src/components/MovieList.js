import React from 'react'
import styled from 'styled-components'
import MovieCard from './MovieCard'

const Card = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-row-gap: 20px; 
    margin: 0 auto 0 auto;
    text-align:center;
`

function MovieList({ data, movePage }) {
    const list = Object.keys(data).map(res => <MovieCard key={res} movePage={movePage} data={data[res]} />)
    return (
        <Card>
            {list}
        </Card>
    )
}

export default MovieList
