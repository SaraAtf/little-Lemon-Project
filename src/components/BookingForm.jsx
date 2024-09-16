import React, { useState } from 'react'
import '../css/bookingForm.css'
import { useNavigate } from 'react-router-dom';
export function BookingForm( { dispatch, availableTimes } ) {
    const navigate = useNavigate()
    const [ reservationForm, setReservationForm ] = useState( {
        date: '',
        times: '',
        guests: '',
        occasion: ''
    } );
    const submitAPI = function ( formData ) {
        return true;
    };


    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch()
        if ( submitAPI( reservationForm ) ) {
            navigate( '/confirmed' )
        }

    }
    const handelChange = ( e ) => {
        setReservationForm( {
            ...reservationForm,
            [ e.target.name ]: e.target.value
        } )
    }
    return (

        <form onSubmit={handleSubmit}>
            <fieldset className='d-flex' >
                <div className='formInput d-flex flex-column p-3 mb-3'>
                    <label className='mb-2' htmlFor="book-date">Choose Date : </label>
                    <div className='inputContainer'>
                        <i className="bi bi-calendar"></i>
                        <input name="date" id='book-date' placeholder='Select Date' type="date" required value={reservationForm.date} onChange={handelChange} />
                    </div>
                </div>
                <div className='formInput d-flex flex-column p-3 mb-3'>
                    <label className='mb-2' htmlFor="book-time">Choose Time : </label>
                    <div className='inputContainer'>
                        <i className="bi bi-alarm"></i>
                        <select name="times" id="book-time" value={reservationForm.times} onChange={handelChange} >
                            <option value="">Select a time</option>
                            <option>17:00</option>
                            {availableTimes.map( ( availableTime ) =>
                                <option key={availableTime}>{availableTime}</option>
                            )}
                        </select>
                    </div>

                </div>
            </fieldset>
            <fieldset className='d-flex' >
                <div className='formInput d-flex flex-column p-3 mb-3'>
                    <label htmlFor="book-guests" className='mb-2'>Number Of Guests : </label>
                    <div className='inputContainer'>
                        <i className="bi bi-person"></i>
                        <input min={1} name="guests" placeholder='1' required id='book-guests' type="number" value={reservationForm.guests} onChange={handelChange} />
                    </div>
                </div>
                <div className='formInput d-flex flex-column p-3 mb-3'>
                    <label className='mb-2' htmlFor="book-occasion">Occasion : </label>
                    <div className='inputContainer'>
                        <i className="bi bi-cake2"></i>
                        <select name='occasion' id='book-occasion' value={reservationForm.occasion} onChange={handelChange}  >
                            <option>Select Occasion</option>
                            <option>Birthday</option>
                            <option>Anniversary</option>
                        </select>
                    </div>
                </div>
            </fieldset>
            <div className='btnReceive'>
                <input className='btn btn-warning mx-3' aria-label='On Click' type="submit" value={"Make Your Reservation"} />
            </div>
        </form>
    )
}
