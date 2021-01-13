import React from 'react';
import ScoreBoard from './ScoreBoard';

const Home = ( props ) => {
    return (
        <div className="container px-3">
            <br />
            <h2>백준 스코어보드</h2>
            <br />
            <ScoreBoard solvedData={props.solvedData}/>
        </div>
    );
};
export default Home;