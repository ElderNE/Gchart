import { useEffect, useState } from 'react';

export const useGetData = () => {

    const [datalist, setDatalist] = useState({});

    useEffect(() => {
        const req = async () => {
            try {
                let request_data = await fetch('http://82.202.204.94/tmp/test.php',{mode:'cors'});
                if(request_data.ok) {
                    let response_data = await request_data.json();
                    setDatalist(response_data);
                }    
            }
            catch(error) {
                console.log(error);
                setDatalist({error: "error"});
            }
        };
        req();
    },[])

    return datalist;
}