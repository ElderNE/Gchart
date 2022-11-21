import { useState, useCallback } from 'react';
import Item from '../../components/item';
import TableColumn from '../../containers/table_column/inex';
import TableRow from '../../containers/table_row';
import WorkItemsHeader from '../../components/work_items_header';
import Chart from '../../containers/chart';
import ItemList from '../item_list';
import { startDate } from '../../utils/start_day';
import './style.css';

function Table({chart}) {

    const [accordion, setAccordion] = useState(chart.length);
    const [rotate, setRotate] = useState(false);

    function openClose(i){
        if(chart[i-1].chaild_count){
            if(accordion === i){
                setAccordion(chart.length);
                setRotate(false);
            }
            else {
                setAccordion(i);
                setRotate(i);
            }
        }    
    }

    const callbacks = {
        OpCl: useCallback((i) => openClose(i), [accordion]),
      };
    
        return (
        <section className='table'>
            <div className='table_tree'>
                <WorkItemsHeader/>
                <Item/>
                <ItemList   chart={chart} 
                            x={accordion} 
                            openClose={callbacks.OpCl} 
                            rotate={rotate}/>
            </div>
            <div className='table_calendar'>
                <TableRow startDate={startDate(chart)}/>
                <TableColumn/>
                <Chart  chart={chart} 
                        accordion={accordion}
                        startDate={startDate(chart)}/>
            </div>
            <div className='table_gradient'></div>
        </section>
    );
}

export default Table;