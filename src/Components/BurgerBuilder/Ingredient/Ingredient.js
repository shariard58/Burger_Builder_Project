import React from "react";
import './Ingredient.css';
import BreadTop from '../../../Assests/images/top.png';
import BreadBottom from '../../../Assests/images/bottom.png';
import Meat from '../../../Assests/images/meat.png';
import Salad from '../../../Assests/images/salad.png';
import Cheese from '../../../Assests/images/cheese.png';




const Ingredient = props => {

    let ingredient = null;

    switch (props.type) {

        case 'bread-bottom':
            ingredient = <div> <img src={BreadBottom} alt="Bottom Bread" /> </div>;
            break;
        case 'bread-top':
            ingredient = <div> <img src={BreadTop} alt="Top  Bread" /></div>;
            break;
        case 'meat':
            ingredient = <div> <img src={Meat} alt="Meat" /></div>;
            break;

        case 'salad':
            ingredient = <div> <img src={Salad} alt="Salad" /></div>;
            break;


        case 'Cheese':
            ingredient = <div> <img src={Cheese} alt="Cheese" /></div>;
            break;

        default:
            ingredient = null;


    }
    return (
        <div className="Ingredient">
            {ingredient}
        </div>
    )
}


export default Ingredient;