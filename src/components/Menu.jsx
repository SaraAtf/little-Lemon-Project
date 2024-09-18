import React from "react";
import { recipes } from "../recipes";
import '../css/menu.css'
import Swal from 'sweetalert2'

export function Menu() {
	const orderNow = ( id ) => {
		Swal.fire( {
			position: "center",
			icon: "success",
			title: "Your Order has been saved",
			showConfirmButton: false,
			timer: 1500
		} );
	}
	return <div className='menu-container mb-5'>
		<div className="container">
			<div className="menu-header d-flex justify-content-between">
				<h2 className="fw-bold">This Weeks Specials</h2>
				<button className="order-menu">Order Menu</button>
			</div>
			<div className="cards d-flex">
				{
					recipes.map( ( recipe ) => <div key={recipe.id} className='menu-card '>

						<img src={recipe.image} alt="" className="img-fluid menu-img" />
						<div className="p-4 card-info">
							<div className="card-header d-flex justify-content-between mb-3">
								<h5>{recipe.title}</h5>
								<p className="text-danger fw-bold">{recipe.price}$</p>
							</div>
							<p className="mb-4 description">{recipe.description}</p>
							<button className="d-inline-block orderBtn btn btn-warning" onClick={() => orderNow( recipe.id )}>Order Now</button>
						</div>
					</div> )
				}
			</div>
		</div>

	</div>;
}
