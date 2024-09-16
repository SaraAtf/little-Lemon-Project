import React, { useReducer } from 'react'
import { Nav, Header, BookingForm, Booking, ConfirmedBooking } from "./index";
import { Home } from "../Pages";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, useNavigate } from "react-router-dom";

export function Main() {
    // const navigate = useNavigate();

    const seededRandom = function ( seed ) {
        var m = 2 ** 35 - 31;
        var a = 185852;
        var s = seed % m;
        return function () {
            return ( s = s * a % m ) / m;
        };
    }

    const fetchAPI = function ( date ) {
        let result = [];
        let random = seededRandom( date.getDate() );

        for ( let i = 17; i <= 23; i++ ) {
            if ( random() < 0.5 ) {
                result.push( i + ':00' );
            }
            if ( random() < 0.5 ) {
                result.push( i + ':30' );
            }
        }
        return result;
    };


    const initialState = { availableTimes: fetchAPI( new Date() ) }
    const updateTimes = ( state, action ) => {
        return { availableTimes: fetchAPI( new Date() ) }
    }
    const [ state, dispatch ] = useReducer( updateTimes, initialState );



    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Nav />}>
                <Route index element={<Home />} />
                <Route path="booking" element={<Booking dispatch={dispatch} availableTimes={state.availableTimes} />} />
                <Route path="confirmed" element={<ConfirmedBooking />} />
            </Route>
        )
    )
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}
