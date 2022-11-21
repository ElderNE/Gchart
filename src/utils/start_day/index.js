export const startDate = (chart) => {
        
    let start_day = Date.now();
    let temp = 0;
    for(let k of chart){
        temp = Date.parse(k.period_start) - (Number(k.period_start.slice(8, 10))-1)*24*3600*1000;
        if(temp < start_day)
            start_day = temp;
    }
    return start_day;
}