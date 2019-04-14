import React from 'react'
import WatchItem from './MovieItem'

function Watch({ watch, movePage }) {
    if (watch) {
        const list = Object.keys(watch).map(res => <WatchItem key={res} data={watch[res]} movePage={movePage} />)
        return (
            <div>
                {list}
            </div>
        )
    }
    else {
        return (
            <div>
                hey, you don't add Watch list, make Watch list
            </div>
        )
    }

}

export default Watch
