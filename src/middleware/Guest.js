import { useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { Authenticated } from '../store';

function Guest(props) {
    const history = useNavigate ()
    const auth = useRecoilValue(Authenticated)

    useEffect(() => {
        if (auth.check) {
            history('/dashboard')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return props.render
}

export default Guest;