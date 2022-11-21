import React from 'react';
import './style.css';

function WorkItemsHeader() {

    return (
        <div className='work_item_header'>
            <p>Work item</p>
        </div>
    );
}

export default React.memo(WorkItemsHeader);