import React, { useEffect, useState } from 'react'
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
    const [ errors, setErrors ] = useState( {
        date: null,
        times: null,
        guests: null,
        occasion: null
    } )

    const isEmpty = ( field ) => {
        return field.length == 0
    }

    const submitAPI = function ( formData ) {
        let newError = { ...errors }
        Object.entries( formData ).forEach( prop => {
            if ( isEmpty( prop[ 1 ] ) ) {
                newError[ prop[ 0 ] ] = `${prop[ 0 ]} is Required`
            }
        } )

        setErrors( {
            ...errors,
            ...newError
        } )
        return Object.values( newError ).every( value => value == null )
    };


    const handleSubmit = ( e ) => {
        e.preventDefault();
        dispatch()
        if ( submitAPI( reservationForm ) ) {
            navigate( '/confirmed' )
        } else {
            console.log( "INVALID" )
        }

    }
    const handelChange = ( e ) => {
        setReservationForm( {
            ...reservationForm,
            [ e.target.name ]: e.target.value
        } )
        setErrors( {
            ...errors,
            [ e.target.name ]: null
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
                    {errors.times && <p className='text-danger'>Time is Required</p>
                    }
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
                    {errors.occasion && <p className='text-danger'>Occasion is Required</p>}
                </div>

            </fieldset>
            <div className='btnReceive'>
                <input className='btn btn-warning mx-3' aria-label='On Click' type="submit" value={"Make Your Reservation"} />
            </div>
        </form>
    )
}
