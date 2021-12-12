import React, {useContext} from 'react';
import {UserContext} from '../context/User';

function AuthenticatedUser(props) {
    const {user, loading} = useContext(UserContext)
    
    return (
        <div>
            {
                loading ? <div>Loading . . .</div> :
                <div>
                    {user.name}
                </div>
            }
        </div>
    );
}

export default AuthenticatedUser;