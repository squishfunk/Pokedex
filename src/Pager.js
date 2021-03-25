import React from 'react';

function Pager({ nextPage, prevPage }) {
    return (
        <div className="pager">
            {prevPage && <button onClick={prevPage} className="prev">Prev</button>}
            {nextPage && <button onClick={nextPage} className="next">Next</button>}
        </div >
    )
}

export default Pager;