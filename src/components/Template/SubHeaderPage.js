import './SubHeaderPage.css'

export default function SubHeaderPage(props){
    return(
        <>
            <div className="subheader-content-title">{ props.title }</div>
            <div className="subheader-content-subtitle">{ props.subtitle }</div>
        </>
    )
}