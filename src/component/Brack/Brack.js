import './Brack.css'

const Brack = (props) => {
    const { handleBtnValue } = props;

    return (
        <div className='brack-container'>
            <h3>Add Half Time</h3>
            <div className='brack-btn'>
                <button onClick={() => handleBtnValue(10)} className='btn-brack' type="submit">10m</button>
                <button onClick={() => handleBtnValue(15)} className='btn-brack' type="submit">15m</button>
                <button onClick={() => handleBtnValue(20)} className='btn-brack' type="submit">20m</button>
                <button onClick={() => handleBtnValue(25)} className='btn-brack' type="submit">25m</button>
                <button onClick={() => handleBtnValue(30)} className='btn-brack' type="submit">30m</button>
            </div>
        </div>
    );
};

export default Brack;