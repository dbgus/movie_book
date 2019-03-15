import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    padding:30px 0 30px 0;
    &:hover{
        background-color: #CCCCCC;
        transition: .3s
    }
    cursor: pointer
`

const Poster = styled.img`
    width: 300px;
`


function MovieCard({ data, movePage }) {
    return (
        <Card onClick={(id) => movePage(id)} id={data.id} >
            <Poster src={data.large_cover_image} id={data.id} />
            <p id={data.id}>{data.title}</p>
            <p id={data.id}>rating: {data.rating}</p>
        </Card>
    )
}

export default MovieCard
