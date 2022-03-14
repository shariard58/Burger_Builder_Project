import React, { Component } from "react";
import Burger from "./Burger/Burger";



export default class BurgerBuilder extends Component {

    state = {

        ingredients: [


            { type: 'salad', ammount: 0 },
            { type: 'Cheese', ammount: 0 },
            { type: 'meat', ammount: 0 },




        ]
    }
    render() {

        return (

            <div>

                <p>
                    <Burger ingredients={this.state.ingredients} />
                </p>
            </div>
        )

    }
}