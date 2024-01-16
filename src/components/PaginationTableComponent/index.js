import { Navigate, Link } from "react-router-dom"
import './component.css'

export default function PaginationTableComponent(props){
    return(
        <>
            { props.current >= 2 && <button className='table-pagination-first-button' onClick={ () => props.callback(props.current-1) }>anterior</button> }
            { props.current >= 3 && <button onClick={ () => props.callback(1) }>1</button>}
            { props.current >= 4 && <button>...</button> }
            { props.current >= 2 && <button onClick={ () => props.callback(props.current-1) }>{ props.current -1 }</button>}

            <button className='table-button-pages-current'>{ props.current }</button>

            { props.current < props.total && <button onClick={ () => props.callback(props.current+1) }>{ props.current + 1 }</button>}
            { props.current <= (props.total - 3) && <button>...</button> }
            { props.current <= (props.total - 2) && <button onClick={ () => props.callback(props.total) }>{ props.total }</button> }
            { props.current < props.total && <button className='table-pagination-last-button' onClick={ () => props.callback(props.current+1) }>próximo</button> }
        </>
    )
}