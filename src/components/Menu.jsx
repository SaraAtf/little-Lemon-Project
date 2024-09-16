import React from "react";
import { recipes } from "../recipes";

export function Menu() {
	return <div className='menu-container'>
		<div className="container">
			<div className="menu-header">

				<h2>This Weeks Specials</h2>
				<button>Order Menu</button>
			</div>
			<div>
				{
					recipes.map( ( recipe ) => <div key={recipe.id}>

						<img src={recipe.image} alt="" className="img-fluid" />
						<div>
							<div>
								<h5>{recipe.title}</h5>
								<p>{recipe.price}</p>
							</div>
							<p>{recipe.description}</p>
							<button className="orderBtn">Order Now</button>
						</div>
					</div> )
				}
			</div>
		</div>

	</div>;
}
