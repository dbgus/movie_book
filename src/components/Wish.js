import React from 'react'
import WishItem from './WishItem'

function Wish({ wish, movePage }) {
    if (wish) {
        const list = Object.keys(wish).map(res => <WishItem key={res} data={wish[res]} movePage={movePage} />)
        return (
            <div>
                {list}
            </div>
        )
    }
    else {
        console.log('fuck')
        return (
            <div>
                hey, you don't add wish list, make wish list
            </div>
        )
    }

}

export default Wish
