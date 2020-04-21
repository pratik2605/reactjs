import React from 'react';

function Profile(props) {
  return (
    <div>
      <img src={ props.url } style={{height: '50px', float: 'left'}}/>
      <p style={{marginLeft: '65px', lineHeight: '50px'}}>{props.name}</p>
    </div>
  );
}

export default Profile;