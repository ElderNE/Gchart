import React from 'react';
import './style.css';

function ItemChart({style_list, text}) {

    return (
        <div className="chart_item">
            <div className="chart_graph" style={style_list}>
            </div>
            <div className="chart_text">{text}</div>
        </div>
    );
}

export default React.memo(ItemChart);