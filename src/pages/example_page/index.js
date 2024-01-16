import './index.css'
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom"
import authenticated from '../../services/AuthServices'
import { sendGET } from '../../services/ApiServices';

import { BiSolidMessageSquareAdd } from 'react-icons/bi'
import { FaMoneyBill1Wave } from 'react-icons/fa6'
import { FaBoxes } from 'react-icons/fa'
import { GiJigsawBox } from 'react-icons/gi'
import { GoAlertFill } from 'react-icons/go'
import { MdAttachMoney } from 'react-icons/md'
import { TbCategoryFilled } from 'react-icons/tb' 

import { formatPrice } from '../../utils/FormatUtils'
import OperationsEnum from '../../utils/OperationsEnum'
import Template from '../../components/Template/Template'
import DCInputText from '../../components/Form/DCInputText'
import TableComponent from '../../components/TableComponent'
import SubHeaderComponent from '../../components/Template/SubHeaderPage'

function Products(){
    let loadData                                    = false
    const [titleModal, setTitleModal]               = useState('')
    const [toggleShowModal, setToggleShowModal]     = useState(false)
    const [searchTable, setSearchTable]             = useState('')
    const [dataPage, setDataPage]                   = useState({})
    const [inputCategory, setInputCategory]         = useState('')
    const [listDataTable, setListDataTable]         = useState([])

    // CARREGAMENTO DOS DADOS
    useEffect(() => {
        if(!loadData){
            const response = sendGET('/product/?p=1', null, callbackAPI)
            loadData = true
        }
    }, [])

    // METODO PARA MONTAR O MODAL DE REGISTRO
    const toggleShowModalRegister = () => {
        setTitleModal('Registrar produto')
        setToggleShowModal(!toggleShowModal)
    }

    // METODO PARA MONTAR O MODAL DE EDIÇÃO
    const toggleShowModalEdit = () => {
        setTitleModal('Editar produto')
        setToggleShowModal(!toggleShowModal)
    }

    // METODO CALLBACK DOS DADOS
    const callbackAPI = (response) => {
        setDataPage(response.data.data)

        setListDataTable([])
        let arrayTempData = []
        response.data.data.list.map((value) => { 
            let arrayValue = []  

            arrayValue.push(value.name)
            arrayValue.push(value.category)
            arrayValue.push(formatPrice(value.cost))
            arrayValue.push(formatPrice(value.sale))
            arrayValue.push((((value.sale - value.cost) / value.sale) * 100).toFixed(2) + "%")
            arrayValue.push(value.stock)
            arrayValue.push(value.status) 
    
            arrayTempData.push(arrayValue)
        })
        
        setListDataTable(arrayTempData)
    }

    // METODO PARA PAGINACAO
    const handlePagination = (page) => {
        //TODO : PENSAR NA PAGINACAO QUANDO TIVER NA CONSULTA
        const response = sendGET('/product/?p='+page, null, callbackAPI)
    }

    // METODO PARA EXECUTAR PESQUISA DA PESQUISA
    const handleKeyDownSearch = (e) => {
        if(e.key === 'Enter'){
            const response = sendGET('/product/?q='+searchTable+'p=1', null, callbackAPI)
        } 
    }

    if(!authenticated()){
        return <Navigate replace to="/login" />
    } else {
        return(
            <>
                <Template operation={ OperationsEnum.PRODUCTS } /> 

                <div className="content-backoffice"> 
                    <SubHeaderComponent title='{PAGE TITLE}' subtitle='{Resumo do que a página representa para o usuário}' />

                    <div className="container-content-backoffice-pages">
                        <div className='products-container-kpis'>
                            <div className='content-card products-container-kpis-content products-container-kpis-content-end-stock'>
                                <div className='products-kpi-title'><GoAlertFill />Título 1</div>
                                <div className='products-kpi-value'>- bla</div> 
                            </div>

                            <div className='content-card products-container-kpis-content products-container-kpis-content-stock'>
                                <div className='products-kpi-title'><MdAttachMoney />Título 2</div>
                                <div className='products-kpi-value'>{ formatPrice(250.00) }</div>
                            </div>

                            <div className='content-card products-container-kpis-content products-container-kpis-content-margin'>
                                <div className='products-kpi-title'><FaMoneyBill1Wave />Título 3</div>
                                <div className='products-kpi-value'>{ formatPrice(100.00) }</div>
                            </div>

                            <div className='content-card products-container-kpis-content products-container-kpis-content-active'>
                                <div className='products-kpi-title'><GiJigsawBox />Título 4</div>
                                <div className='products-kpi-value'>1.000</div>
                            </div>

                            <div className='content-card products-container-kpis-content products-container-kpis-content-total'>
                                <div className='products-kpi-title'><FaBoxes />Título 5</div>
                                <div className='products-kpi-value'>0</div>
                            </div>
                        </div>

                        <div className='content-card products-container'>
                            {dataPage.total > 0 && <>
                                <div className='table-container-buttons'>
                                    <button onClick={ () => toggleShowModalRegister() }><BiSolidMessageSquareAdd />Cadastrar produto</button>
                                </div>

                                <div className='table-container-search'>
                                    <input placeholder='Pesquisar...' type='Search' onChange={ (e) => setSearchTable(e.target.value) } onKeyDown={ handleKeyDownSearch } value={ searchTable } />
                                    <label className='table-search-label'>Pressione ↵ para pesquisar</label>
                                </div>

                                { listDataTable.length > 0 &&
                                    <TableComponent columns="Nome|Categoria|Custo|Venda|Margem|Estoque|Status" 
                                        data={ listDataTable }
                                        totalData={ dataPage.total }
                                        currentPage={ dataPage.currentPage } 
                                        totalPages={ dataPage.totalPages } 
                                        callback={ handlePagination } />
                                }
                            </>}
                        </div>
                    </div>

                    { toggleShowModal && 
                        <div className='products-container-modal-content'>
                            <div className='content-card product-modal-content'>
                                <h3>{ titleModal }</h3>

                                <div>
                                <DCInputText label='Categoria' name='username' placeholder='Categoria' type='email' required={ true } icon={ <TbCategoryFilled /> } change={ (e) => setInputCategory(e.target.value) } />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </>
        )
    }
}

export default Products