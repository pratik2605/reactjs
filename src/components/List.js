import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
    var msg = '';
    if (props.optionsList.length <=2) {
        msg = 'Please insert more items to the list, min 2 required'
    }
    else {
        msg = `Length of the list is ${props.optionsList.length}`
    }
    var optionsList = props.optionsList.map(function (item, i) {
        return <option key={i}>{item}</option>
    })
    return (
      <div style={props.cfg}>
        {msg && <p>{msg}</p>}
        <h3>Q: Who do you want to be when you grow up?</h3>
        <select>
          {optionsList}
        </select>
      </div>
    );
  }
List.defaultProps = {
    optionsList: ['Default']
}
List.propTypes = {
    optionsList: PropTypes.array.isRequired,
    cfg: PropTypes.shape({
        color: PropTypes.string.isRequired,
        size: PropTypes.number.isRequired
    })
}
  export default List;