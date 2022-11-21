import React from 'react';
import './style.css';

function ItemGrid({i, day}) {

    return (
        <div className={(i<5)? 'grid_col_dark' : 'grid_col_gray'}>
            {day}
        </div>
    );
}

export default React.memo(ItemGrid);