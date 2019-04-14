import React from 'react'
import styled from 'styled-components'

import Delete from '../etc/icon/delete.svg'

const DataBox = styled.div`
    width:60%;
    margin: 0 auto 30px auto;
    border:1.5px solid black;
    border-radius: 5px;
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    background-color: white;
`

const DataLayout = styled.div`
    padding: 30px;
    &:hover{
        background-color: #CCCCCC;
        transition: .3s
    }
`

const ListItem = styled.div`
`

const MovieName = styled.p`
    text-align: center;
`
const IconBox = styled.div`
    display:flex;
    justify-content: center;

`
const DeleteIcon = styled.img`
    cursor: pointer;
`

const Line = styled.div`
`

function SettingDataBox({ Status, Data, DeleteBtn }) {
    if (Data) {
        return (
            <DataBox>
                {Data.map(res =>
                    <DataLayout key={res[0]}>
                        <ListItem >
                            <img alt="" src={res[2]} />
                            <MovieName>{res[1]}</MovieName>
                            <IconBox>
                                <DeleteIcon src={Delete} alt="" onClick={DeleteBtn} />
                            </IconBox>
                        </ListItem>
                        <Line />
                    </DataLayout>
                )}
            </DataBox>
        )
    }
    else {
        return (
            <div>
                <h1>

                </h1>
            </div>
        )
    }
}

export default SettingDataBox
