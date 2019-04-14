import React from 'react'
import WishItem from './MovieItem'

function Wish({ wish, movePage }) {
    if (wish) {
        const list = Object.keys(wish).map(res =>
            <WishItem key={res} data={wish[res]} movePage={movePage} />
        )
        return (
            <div>
                {list}
            </div>
        )
    }
    else {
        return (
            <div>
                hey, you don't have wish list, make wish list
            </div>
        )
    }

}

export default Wish
