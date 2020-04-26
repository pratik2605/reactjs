import React from 'react';
import Profile from './Profile';

export function ProfileList() {
    return (
        // React.Fragment
        <>
            <Profile
                name="Pratik"
                url="https://vignette.wikia.nocookie.net/phineasandferb/images/6/68/Perry_smiling_avatar.png/revision/latest?cb=20100118055301"
            />
            <hr />
            <Profile
                name="Pratik 2"
                url="https://vignette.wikia.nocookie.net/phineasandferb/images/6/6a/Doofenshmirtz_official.jpg/revision/latest/scale-to-width-down/240?cb=20140503030926"
            />
            <hr />
            <Profile
                name="Pratik 3"
                url="https://vignette.wikia.nocookie.net/phineasandferb/images/b/be/Monogram_-_Rollercoaster_avatar_1.png/revision/latest?cb=20100131231239"
            />
            <hr />
        </>
    );
}