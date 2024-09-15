import React, { useState } from 'react'

export function BookingForm() {

    const [ date, setDate ] = useState( "" )
    const handleSubmit = ( e ) => {
        e.preventDefault();
    }
    const handelChange = ( value ) => {
        setDate( value )
    }
    return (
        <section className='py-5'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div>
                        <label htmlFor="book-date">Choose Date : </label>
                        <input id='book-date' type="date" required value={date} onChange={( e ) => handelChange( e.target.value )} />
                    </div>
                </fieldset>
            </form>
        </section>
    )
}
