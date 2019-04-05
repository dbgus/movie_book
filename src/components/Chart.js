import React from 'react'
import {
    PieChart, Pie, Tooltip
} from 'recharts';
import styled from 'styled-components'

const ChartBox = styled.div`
    display:flex;
    justify-content:center;
    text-align:center;
`
const Expression = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
`


function Chart({ data }) {
    return (
        <ChartBox>
            <div>
                <PieChart width={600} height={600}>
                    <Pie
                        dataKey="value"
                        isAnimationActive={true}
                        animationBegin={300}
                        cx={280}
                        cy={300}
                        data={data}
                        outerRadius={200}
                        fill="#8884d8"
                    />
                    <Tooltip />
                </PieChart>
                <h3>
                    &lt;  hover the chart! &gt;
                </h3>
            </div>
            <Expression>
                <h3>
                   &lt; your movie genres &gt;
                </h3>
                {data.map(res => <p key={Object.values(res)}>{res.name}: {res.value}</p>)}
            </Expression>
        </ChartBox>
    )
}

export default Chart
