import React from 'react';
import './style.css';
import vector from './img/vector.svg';

function Item({count, title, marginLeft, marginLeft0, image, i, buttonClc, rotate}) {

    return (
        <div className='item' onClick={() => buttonClc(i)}>
            {title?
                <>
                {count? <img    src={vector} 
                                className={rotate===i? "item_img_rotate":""} 
                                style={{marginLeft:marginLeft}} 
                                width={11} 
                                height={6} 
                                alt="array"/>: ""}
                <img    src={image} 
                        style={{marginLeft:marginLeft0}} 
                        width={16} 
                        height={16} 
                        alt="label"/>
                <p className='item_count'>{count}</p>
                <p className='item_title'>{title}</p>
                </>:<></>
            }
        </div>
    );
}

export default React.memo(Item);