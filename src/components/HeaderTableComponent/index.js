// import './component.css'

export default function HeaderTableComponent(props){

    return(
        <>
           <th align={ props.align } onClick={ props.handleSortable }>
                { props.title }
            </th>
        </>
    )
}