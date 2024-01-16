import './component.css'
import { useState } from 'react';
import PaginationTableComponent from '../../components/PaginationTableComponent'
import DCInputText from '../Form/DCInputText'

import { MdOutlineDataSaverOn } from "react-icons/md";
import { FaSave } from "react-icons/fa";




export default function TableComponent(props){
    function shouldComponentUpdate(){
        console.log("shouldComponentUpdate()")
    }

    function changePageSize(e){
        props.onChangePageSize(parseInt(e.target.value))
    }

    return(
        <>
            <div className='table-container-buttons'>
                <input placeholder='pesquisar...' className='table-input-search' />

                <button className='table-button-register'><MdOutlineDataSaverOn /><span className='container-button-register-title'>Cadastrar</span></button>

                <select onChange={ changePageSize } className='table-select-page-size'>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                </select>

                
            </div>

            { props.result != undefined && props.result.length > 0 && <>
                <table>
                    <thead>{ props.makeHeader() }</thead>

                    <tbody>{ props.result.map((_data, _row) => props.makeBody(_row, _data)) }
                    </tbody>
                </table>

                <div className='table-container-pagination'>
                    <div className='table-pagination-label-total'>
                        Mostrando <span>{ (props.currentPage * 10) - 9 }</span> até <span>{ ((props.currentPage * 10) - 10) + props.result.length }</span> de <span>{ props.totalData }</span> resultado(s)
                    </div>

                    <div className='table-container-pagination-pages'>
                        <PaginationTableComponent current={ props.currentPage } total={ props.totalPages } callback={ props.onChangePagination } />
                    </div>
                </div>
            </>}

            { props.result == undefined || props.result.length == 0 && <>
                <div className="table-container-empty-data content-card">Nenhum registro encontrado</div>
            </>}
        </>
    )
}