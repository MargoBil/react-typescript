import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage:React.FC = ()=> {
    const history = useHistory();
    return (
    <>
    <h1>Page of information</h1>
    <p>Something text about information</p>
    <button className='btn' onClick={()=>history.push('/')}>Back to list to-do</button>
    </>
    );
}