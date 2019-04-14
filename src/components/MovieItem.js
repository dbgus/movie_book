import React from 'react'
import styled from 'styled-components'

const WishBox = styled.div`
width:70%;
display:flex;
align-items:center;
justify-content: space-around;
margin: 0 auto 0 auto;
padding:3rem;
`
const Poster = styled.img`
width:210px;
`
const Right = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
`
const InfoBox = styled.div`
width:700px;
display:flex;
justify-content: space-between;
`
const MovieData = styled.div`
    margin-left: 10px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    
`
const Title = styled.p`
font-size: 2rem;
text-align:center;
`
const ShowDetail = styled.p`
cursor: pointer;
&:hover{
    text-decoration: underline
}
`
const DataWord = styled.p`
    padding:5px
`
const RedWord = styled.p`
    color: red;
    font-weight: bold;
    padding:10px;
`

function MovieItem({ data, movePage }) {
    return (
        <WishBox>
            <Poster alt="" src={data.medium_cover_image} />
            <Right>
                <InfoBox>
                    <Title>{data.title}</Title>
                    <MovieData>
                        <DataWord>rating: {data.rating} / 10 </DataWord>
                        <DataWord>runTime: {data.runtime}M </DataWord>
                        <RedWord>{data.mpa_rating}</RedWord>
                    </MovieData>
                </InfoBox>
                <ShowDetail id={data.id} onClick={movePage} >
                    movie's detail
                </ShowDetail>
            </Right>
        </WishBox>
    )
}

export default MovieItem
