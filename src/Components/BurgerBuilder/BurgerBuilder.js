import React, { Component } from "react";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";



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

            <div className="d-flex flex-md-row  flex-column">

                <p>
                    <Burger ingredients={this.state.ingredients} />
                    <Controls />
                </p>
            </div>
        )

    }
}