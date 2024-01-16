import './index.css'
import { useState, useEffect  } from 'react';
import { Navigate } from "react-router-dom"
import authenticated from '../../services/AuthServices'
import toast from 'react-hot-toast'

import { sendGET } from '../../services/ApiServices';

import OperationsEnum from '../../utils/OperationsEnum'
import Template from '../../components/Template/Template'
import TableComponent from "../../components/TableComponent"
import HeaderTableComponent from "../../components/HeaderTableComponent"

function Classes(props){
    const [loadData, setLoadData] = useState(false)
    const [pageCurrentTable, setPageCurrentTable] = useState(1)
    const [pageSizeTable, setPageSizeTable] = useState(10)
    const [data, setData] = useState([])

    useEffect(() => {
        updateData("name")
    }, []);

    function callbackLoad(response){
        setData(response.data.data)
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////
    // [ TABLE METHODS ]
    ///////////////////////////////////////////////////////////////////////////////////////////////
    function pagination(page = 1){
        setPageCurrentTable(page)
        updateData("name")
    }

    function handlePageSize(pageSize){
        console.log(pageSize)
        setPageSizeTable(pageSize)
        updateData("name")
    }

    function updateData(order = "name"){
        // sendGET('/partners/v1/'+_PARTNER+'/classes?page='+pageCurrentTable+'&limit='+pageSizeTable+'&order='+order, null, callbackLoad)
    }

    function makeHeaderData(){
        return (
            <tr>
                <HeaderTableComponent align="left" title="Nome" handleSortable={ pagination } />
                <HeaderTableComponent align="left" title="Nível" handleSortable={ pagination } />
            </tr>
        )
    }

    function makeBodyData(_rowData, _data){ 
        return(
            <tr className={ _rowData % 2 == 0 ? '' : 'table-row-old' }>
                <td>{ _data.name }</td>
                <td>{ _data.level }</td>
            </tr>
        )
    }
    
    ///////////////////////////////////////////////////////////////////////////////////////////////
    // [ PAGE ]
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if(!authenticated()){
        return <Navigate replace to="/login" />
    } else {
        return(
            <>
                <Template operation={ OperationsEnum.CLASSES } />

                <div className={`content-backoffice ${props.menuCollected ? 'content-backoffice-collected' : ''}`}>
                    <Template.SubHeaderPage title='Turmas' subtitle='Faça a gestão de todas as turmas da sua instituição em um só lugar.' />

                    <div className='content-card classes-container'>
                        <TableComponent 
                            makeHeader={ makeHeaderData } 
                            makeBody={ makeBodyData } 
                            result={ data.result } 
                            currentPage={ data.currentPage } 
                            totalData={ data.totalData } 
                            totalPages={ data.totalPages } 
                            onChangePagination={ pagination }
                            onChangePageSize={ handlePageSize } />
                    </div>
                </div>
            </>
        )
    }
}

export default Classes