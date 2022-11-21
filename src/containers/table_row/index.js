import React from 'react';
import './style.css';
import Grid from '../../containers/grid';

function TableRow({startDate}) {

    let list = [];
    let date = [];
    let count_colomns1 = (1050)/155;
    for(let i = 0; i < count_colomns1; i++){
        date[i] = startDate + (3600*1000*24*i*7);
        list.push(
            <Grid key={i} dateGrid={date[i]}/>
        )
    }

    return (
        <div className='table_row'>
            {list}
        </div>
    );
}

export default React.memo(TableRow);