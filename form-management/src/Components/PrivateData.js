import React, {useEffect, useState} from 'react';
import {Route, Link} from 'react-router-dom';
import { axiosWithAuth } from './AxiosWithAuth';

const DataList = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('/restricted/data')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return ( 
        <div className="PrivateData">

            {data.map(data => {
                return (
                <div className="dishes">
                    {data.name}
                    {data.course}
                    {data.technique}
                    {data.ingredients}
                </div>
                )
            })}
        </div>
    );
}
 
export default DataList;