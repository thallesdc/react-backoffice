import './DCInputText.css'
import { useEffect, useState } from 'react';

export default function DCInputText(props) {
    const [hide, setHide]       = useState(false)
    const [focus, setFocus]     = useState(false)
    const [value, setValue]     = useState("")

    const hideLabel             = hide || focus || value

    let idInputText = 'dc-input-text-'+props.name;
    let inputRequired = props.required ? props.required : false;
    let inputRequiredSpan = inputRequired ? '*' : '';

    function handleAutoFill(e){
        setHide(e.animationName === "onAutoFillStart")
    };

    function onChangeInput(e){
        setValue(e.target.value)
        props.change(e)
    }

    return (
        <>
            <div className="container_dc_input">
                <label for={ idInputText } className={`dc-input-text-label ${hideLabel ? 'input-label-show' : ''}`}>{ props.label }<span className='input-required-mark'>{ inputRequiredSpan }</span></label>
                <input 
                    id={ idInputText } 
                    className='dc-input-text' 
                    name={ props.name } 
                    // placeholder={ props.label } 
                    type={ props.type } 
                    style={{ background: props.icon }}
                    onChange={ onChangeInput }
                    required={ inputRequired }
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)} />
            </div>
        </>
    ); 
}  