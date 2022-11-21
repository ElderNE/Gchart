import React from 'react';
import './style.css';
import Column from '../../components/column';

function TableColumn() {

    let list = [];
    let count_colomns = (1050)/22-1;
    for(let i = 0; i < count_colomns; i++){
        list.push(
            <Column key={i}/>
        )
    }

    return (
        <div className='table_col'>
            {list}
        </div>
    );
}

export default React.memo(TableColumn);