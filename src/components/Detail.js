import React from 'react'
import styled from 'styled-components'

import wish from '../etc/icon/calendar.svg'
import eye from '../etc/icon/eye.svg'

const DetailBox = styled.div`
    height: 100%;
    display:flex;
    justify-content: center;
    padding-top: 5rem;
`
const ImageBox = styled.div`
    padding: 2rem;
`
const InfoBox = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:2rem;
    position: relative;
`
const Title = styled.h1`
    margin: 0;
`
const Year = styled.p`
    margin: 0 0 5px 0
`
const GenresBox = styled.div`
    padding:10px 0 10px 0  ;
`
const Genres = styled.span`
    margin:0;
`

const Language = styled.p`
    margin:0
`

const Rating = styled.span`

`

const Mpa = styled.p`

`

const Runtime = styled.span`
`
const Numerical = styled.div`
padding: 10px 0 10px 0;
`
const NumericalItem = styled.span`
    padding: 0 4px 0 4px;
`

const IconBox = styled.div`
    display:flex;
    justify-content: space-around;
`
const Icon = styled.img`
    width:40px;
    padding:1rem;
    cursor: pointer;
`
const IconInfo = styled.div`
    display:flex;
    align-items:center;
    flex-direction: column;
`

const ScriptBox = styled.div`
    width:400px;
`
const Script = styled.p`

`
function Detail({ data, wishClick, watchClick }) {
    return (
        <DetailBox>
            <ImageBox>
                <img alt="" src={data.large_cover_image} />
            </ImageBox>
            <InfoBox>
                <Title>{data.title}</Title>
                <Year>{data.year}</Year>
                <GenresBox>
                    {data.genres.map(res => <Genres key={res}>[ {res} ]</Genres>)}
                </GenresBox>
                <Language>{data.language}</Language>
                <Mpa>{data.mpa_rating}</Mpa>
                <Rating>rating: {data.rating} / 10 </Rating>
                <Runtime>runTime: {data.runtime}M </Runtime>
                <Numerical>
                    <NumericalItem>download: {data.download_count}</NumericalItem>
                    <NumericalItem>like: {data.like_count}</NumericalItem>
                </Numerical>
                <IconBox>
                    <IconInfo>
                        <Icon alt="" src={wish} id={data.id} onClick={wishClick} />
                        <span>add to wish list</span>
                    </IconInfo>
                    <IconInfo>
                        <Icon alt="" src={eye} id={data.id} onClick={watchClick} />
                        <span>add to watch list</span>
                    </IconInfo>
                </IconBox>
                <ScriptBox>
                    <Script>{data.description_full}</Script>
                </ScriptBox>
            </InfoBox>
        </DetailBox>
    )
}


export default Detail
