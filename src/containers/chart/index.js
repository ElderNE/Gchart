import React from 'react';
import './style.css';
import { ChartColor } from '../../sourse/chart_color';
import ItemChart from '../../components/item_chart';

function Chart({accordion, chart, startDate}) {

    const color = ChartColor();

    let list = [];
    for(let i = 0; i < accordion; i++){

        let start_day = Date.parse(chart[i].period_start);
        let end_day = Date.parse(chart[i].period_end);

        let widthElement = (end_day-start_day+24*3600*1000)*22/(24*3600*1000) + 'px';
        let marginLeft = (start_day-startDate)*22/(24*3600*1000) + 'px';

        let style_list = {      backgroundColor: color[i][0], 
                                borderColor:color[i][1], 
                                width: widthElement, 
                                marginLeft: marginLeft}

        list.push(
            <ItemChart key={chart[i].id} style_list={style_list} text={chart[i].title}/>
        )
    }

    return (
        <div className='chart'>
            {list}
        </div>
    );
}

export default React.memo(Chart);