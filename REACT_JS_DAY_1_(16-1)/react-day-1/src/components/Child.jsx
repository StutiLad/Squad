import React from 'react'

export default function Child(props) {
    return (
        <div className='text-center mt-3'>
            <button className="btn btn-outline-primary" onClick={() => props.greetEvent('child')}>Click to greet</button>
        </div>
    )
}
