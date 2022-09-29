import React from 'react';
import './Author.css'
import img from '../../akkasali.png'

const Author = () => {
    return (
        <div className='author-container'>
            <div className='author'>
                <img src={img} alt="" />
                <div>
                    <p>MD. AKKAS ALI</p>
                    <p>GODAGARI , RAJSHAHI</p>
                </div>
            </div>
            <div className='details'>
                <div>
                    <h3>80 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3>5.11</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3>23 <small>yrs</small></h3>
                    <p>age</p>
                </div>
            </div>
        </div>
    );
};

export default Author;