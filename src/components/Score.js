import React, {useState} from 'react';

function Score(props)
{
    var [score, setScore] = useState(0);

    function increaseScore()
    {
        setScore(score+1)
    }
    function decreaseScore()
    {
        if (score === 0) return;
        setScore(score-1)
    }
    return (
        <div>
            <p>Score is {score} for {props.name}</p>
            <button onClick={increaseScore}>+</button><button onClick={decreaseScore}>-</button>
            <button onClick={() => setScore(0)}>Reset</button>
        </div>
    )
}

export default Score;