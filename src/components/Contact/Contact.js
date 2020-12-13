import React from 'react'
import './Contact.css'

export const Contact = () => {
    return (
        <div className="contact__container">
            <form className = "contact__form">
                <div className = "contact__name">
                <label>Name</label><input></input>
                </div>
                <div className = "contact__email">
                <label>Email</label><input></input>
                </div>
               <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
