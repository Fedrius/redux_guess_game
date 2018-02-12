import React from 'react';

export default (props) => {

    console.log('historyyy data', props.data);

    const listStyle = {
        listStyle: 'none'
    }

    const borderStyle = {
        border: '1px solid white'
    }

    const historyList = props.data.map((item, index)=> {

        return <li key={index} style={borderStyle}>Previous Guess: {item.guess} <br/> Result: {item.result}</li>

    })

    return (
        <ul style={listStyle}>
            {historyList}
        </ul>
    )
}