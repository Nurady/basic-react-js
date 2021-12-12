import React from 'react';
import Router from './router';
import {useRecoilState} from 'recoil';
import {Theme} from '../src/store';

function App(props) {
    const [currentTheme, setCurrentTheme] = useRecoilState(Theme)
    const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-success text-white'

    return (
        <div className={`${defaultTheme} vh-100 px-4`}>
            <Router />
        </div>
    );
}

export default App;