import Header from "../../components/header";
import { useGetData } from "../../hooks/get_data";
import Table from "../table";
import { objtoarr } from '../../utils/obj_to_arr';
import './style.css';

function Layout() {

    //get data from fetch
    const chart_data = useGetData();
    
    //chart data
    let chart = [];
    if(chart_data?.chart)
        chart = objtoarr(chart_data.chart);
    
    //header text
    let head_text = "Updating data ...";
    if(chart_data?.project && chart_data?.period)
        head_text = chart_data.project+' / '+ chart_data.period;
    //catch error
    if(chart_data.error)
        head_text = "Can not update data, please try again"
        
    return (
        <div className="layout">
            <Header head_text={head_text}/>
            {chart.length>0 && <Table chart={chart}/>}
            {chart.length===0 && <Table chart={chart}/>}
        </div>
    );
}

export default Layout;