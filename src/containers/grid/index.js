import React from 'react';
import ItemGrid from '../../components/item_grid';
import './style.css';

function Grid({dateGrid}) {

    let list = [];
    let day =[];
    for(let i = 0; i < 7; i++) {
        day[i] = new Date(dateGrid+1000*3600*24*i);
        list.push(
            <ItemGrid   key={i} 
                        day={day[i].getDate()} 
                        i={i}/>
        )
    }
    return (
        <div className='grid'>
            <div className='grid_row'>
                {day[0].toString().substring(8, 11)} {day[0].toString().substring(4, 7)} - 
                {day[6].toString().substring(8, 11)} {day[6].toString().substring(4, 7)}
            </div>
            <div className='grid_col'>
                {list}
            </div>
        </div>
    );
}

export default React.memo(Grid);