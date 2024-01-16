import './DCButton.css'

export default function DCButton(props) { 

    return (
        <button className="dc-button-container" onClick={ props.action }>{ props.text }</button>
    ); 
}  