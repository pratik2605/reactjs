import React, {useState, useEffect, useRef} from 'react';

let inititalState = {
    name: '',
    email: '',
    subject: '',
    message: '',
}
const ContactForm = function () {
    const [state, setState] = useState(inititalState)
    const counter = useRef(1)
    const nameField = useRef(null)

    // Set previously field form values on refresh only on first render
    useEffect(() => {
        var savedItems = JSON.parse(localStorage.getItem('formState'))
        setState({
            ...state,
            ... savedItems
        })
    }, [])

    useEffect(() => {
        //if (state === inititalState) {
        // if (counter.current === 1) {
        //     var savedItems = JSON.parse(localStorage.getItem('formState'))
        //     setState({
        //         ...state,
        //         ... savedItems
        //     })
        // }
        localStorage.setItem('formState', JSON.stringify(state))
        counter.current++;
    })

    // autofocus first field of the form only on first render
    useEffect(() => {
        nameField.current.focus()
    }, []) // effect will only activate when component is loaded for the first time
    
    const handleFormChange = (e) => {
        let newVal = e.target.value;
        let name = e.target.name;
        setState({
            ...state,
            [name]: newVal
        })
    }

    return (
        <>
        <fieldset>
            <label>Name:</label><br />
            <input ref={nameField} name="name" value={state.name} onChange={handleFormChange}/>
        </fieldset>
        <fieldset>
            <label>Email:</label><br />
            <input name="email" value={state.email} onChange={handleFormChange}/>
        </fieldset>
        <fieldset>
            <label>Subject:</label><br />
            <input name="subject" value={state.subject} onChange={handleFormChange}/>
        </fieldset>
        <fieldset>
            <label>Message:</label><br />
            <textarea name="message" value={state.message} onChange={handleFormChange}/>
        </fieldset>
        <fieldset>
            <input type="submit" name="submit" />
        </fieldset>
        </>
    )
}

export default ContactForm;