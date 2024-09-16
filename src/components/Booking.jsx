import React, { useState } from 'react'
import { BookingForm } from '../components'

export function Booking( { dispatch, submitForm, availableTimes } ) {

    return (
        <section className='py-5 sectionBG'>
            <div className="container">
                <h2 className='primaryColor mb-5'>Reservation</h2>
                <BookingForm dispatch={dispatch} availableTimes={availableTimes} />
            </div>
        </section>
    )
}
