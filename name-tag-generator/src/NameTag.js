import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const NameTag = (props) => {
    const [tagInfo, setTagInfo] = useState({
        nickname: '',
        age: '',
        animal: ''
    })

    useEffect(() => {
        setTagInfo({...props.tagInfo})
    }, [
        props.tagInfo.nickname,
        props.tagInfo.age,
        props.tagInfo.animal
    ])

    return (
        <div className="nametag">
          <p>Hello! My nickname is { tagInfo.nickname }</p>
          <p>I am { tagInfo.age } years old</p>
          <p>My favorite animal is a { tagInfo.animal }</p>
          <button
            onClick={() => props.complete()}
            className="complete"
          >
            Complete
          </button>
        </div>
    )
}

NameTag.defaultProps = {
    tagInfo: {}
}
NameTag.propTypes = {
    tagInfo: PropTypes.shape({
        nickname: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        animal: PropTypes.string.isRequired
    })
}

export default NameTag;