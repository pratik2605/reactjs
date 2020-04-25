import React, {useState, useEffect} from 'react';

let initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'Support',
    categories: [],
    hasLoaded: false,
    msg: '',
    errors: [],
}
const ContactFormAjax = function () {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        fetchUserData()
        var savedItems = JSON.parse(localStorage.getItem('formState'))
        setState({
            ...state,
            ...savedItems
        })
    }, [])

    const fetchUserData = () => {
        fetch("https://n89i8xbcal.execute-api.us-west-2.amazonaws.com/prod/react-intro-forms").then((res) => {
            return res.json()
        }).then(json => {
            setState(prevState => {
                return {
                    ...prevState,
                    name: json.name,
                    categories: json.categories,
                    hasLoaded: true
                }
            })
        })
    }
    useEffect(() => {
        window.addEventListener('online', handleOfflineStatusChange.bind(null, 'online'))
        window.addEventListener('offline', handleOfflineStatusChange.bind(null, 'offline'))
        localStorage.setItem('formState', JSON.stringify(state))
        return () => {
            // cleanup event
            window.removeEventListener('online', handleOfflineStatusChange.bind(null, 'online'))
            window.removeEventListener('offline', handleOfflineStatusChange.bind(null, 'offline'))
        }
    })
    
    const handleOfflineStatusChange = (status) => {
        if (status === 'online') {
            setState({
                ...state,
                msg: ''
            })
        }
        else {
            setState({
                ...state,
                msg: 'App is offline'
            })
        }
     }

    const handleFormChange = (e) => {
        let newVal = e.target.value;
        let name = e.target.name;
        setState({
            ...state,
            [name]: newVal
        })
    }

    const handleFormSubmit = () => {
        fetch("https://n89i8xbcal.execute-api.us-west-2.amazonaws.com/prod/react-intro-forms", {
            method: 'post',
            body: JSON.stringify(state)
        }).then((res) => {
            return res.json()
        }).then(json => {
            if (json.success) {
                setState({...state, msg:json.msg})
            }
            else {
                setState({...state, errors:json.errors})
            }
        })
    }

    const handleFormReset = () => {
        setState({ ...state, ...initialState });
        fetchUserData()
    }

    if (!state.hasLoaded) return 'Loading ...'

    var errs = state.errors.map(item => {
        return <div className="error">{item.msg}</div>;
    });
    var categories = state.categories.map((item, i) => {
        return <option key={i}>{item}</option>
    })
    return (
        <>
        {state.msg && <div className="error">{state.msg}</div>}
        {errs}
        <fieldset>
            <label>Name:</label><br />
            <input name="name" value={state.name} onChange={handleFormChange}/>
        </fieldset>
        <fieldset>
            <label>Email:</label><br />
            <input name="email" value={state.email} onChange={handleFormChange}/>
        </fieldset>
        <fieldset>
            <label>Your Category:</label><br />
            <select name="category" value={state.category} onChange={handleFormChange}>
            {categories}
            </select>
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
            <button name="submit" onClick={handleFormSubmit}>Save</button>
            <button className="button" onClick={handleFormReset}>
                Reset Form
            </button>
        </fieldset>
        </>
    )
}

export default ContactFormAjax;