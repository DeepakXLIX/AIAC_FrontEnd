import React, { useState } from 'react';
import '../dist/ProjectManagementSidebar.css'


import search from '../../assest/AIACHomePageIMG/Project Management/white icons/search.png'
import searchGear from '../../assest/AIACHomePageIMG/Project Management/white icons/gear.png'
import moneyBag from '../../assest/AIACHomePageIMG/Project Management/white icons/money-bag.png'
import shoppingBag from '../../assest/AIACHomePageIMG/Project Management/white icons/shopping-bag.png'
import token from '../../assest/AIACHomePageIMG/Project Management/white icons/coin.png'


import search1 from '../../assest/AIACHomePageIMG/Project Management/black icons/2.png'
import searchGear1 from '../../assest/AIACHomePageIMG/Project Management/black icons/1.png'
import moneyBag1 from '../../assest/AIACHomePageIMG/Project Management/black icons/5.png'
import shoppingBag1 from '../../assest/AIACHomePageIMG/Project Management/black icons/4.png'
import token1 from '../../assest/AIACHomePageIMG/Project Management/black icons/3.png'




const ProjectManagementSidebar = () => {

    const [prevHoverStates, setHoverStates] = useState(Array(5).fill(false));

    const handleMouseOver = (index) => {
        setHoverStates(prevHoverStates => {
            const newHoverStates = [...prevHoverStates]; // Create a copy of the previous state array
            newHoverStates[index] = !newHoverStates[index]; // Toggle the hover state for the specified index
            return newHoverStates; // Return the updated state array
        });

    }

    const handleMouseOut = (index) => {
        setHoverStates(prevHoverStates => {
            const newHoverStates = [...prevHoverStates]; // Create a copy of the previous state array
            newHoverStates[index] = !newHoverStates[index]; // Toggle the hover state for the specified index
            return newHoverStates; // Return the updated state array
        });

    }

    const svgUsed =
        [
            {
                svg_w: search,
                svg_b: search1,
                text: "Overview"
            },
            {
                svg_w: searchGear,
                svg_b: searchGear1,
                text: "Ongoing Reporting"
            },
            {
                svg_w: moneyBag,
                svg_b: moneyBag1,
                text: "Financial Transactions"
            },
            {
                svg_w: shoppingBag,
                svg_b: shoppingBag1,
                text: "Work Orders"
            },
            {
                svg_w: token,
                svg_b: token1,
                text: "Token Management "
            }
        ]


    return (
        <div className='projectManagementSidebar'>
            <ul>
                {svgUsed.map((val, index) => (
                    <li key={index} >
                        <a href=" " onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)} >
                            < img
                                src={prevHoverStates[index] ? val.svg_b : val.svg_w}
                                alt=""
                            />
                            <p>
                                {val.text}
                            </p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    );
}


export default ProjectManagementSidebar;
