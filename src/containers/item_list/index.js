import React from 'react';
import Item from '../../components/item';
import './style.css';

function ItemList({chart, x, openClose, rotate}) {

    let list = [];
    let marginCount, shift, count=0;
    if(chart.length){
        for(let k = 0; k < x; k++){
            if(count<=shift)
                ++count;
            marginCount = 2.6+chart[k].id*20-count*20;
            list.push(
                <Item   key={chart[k].id}
                        i={chart[k].id} 
                        title={chart[k].title} 
                        count={chart[k].chaild_count}
                        marginLeft={marginCount}
                        marginLeft0={chart[k].chaild_count? 6.6 : marginCount+37.4}
                        image={`./images/table/menu${chart[k].id}.svg`} 
                        buttonClc={openClose}
                        rotate={rotate}/>
            )
            //add shift if children more than 1
            if(chart[k].chaild_count > 1)
                shift = chart[k].chaild_count;
        }
    }

    return (
        <>
            {list}
        </>
    );
}

export default React.memo(ItemList);