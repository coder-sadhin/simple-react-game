import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <h2>How does react work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div>
                <h2>Props vs state in react</h2>
                <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
            </div>
            <div>
                <h2>How many work with useEffect can be used?</h2>
                <p>You can have multiple useEffects in your code and this is completely fine! As hooks docs say, you should separate concerns. Multiple hooks rule also applies to useState - you can have multiple useState in one component to separate different part of the state, you don't have to build one complicated state object.</p>
            </div>
        </div>
    );
};

export default Blogs;