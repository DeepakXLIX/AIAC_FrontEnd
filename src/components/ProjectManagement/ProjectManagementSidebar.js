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
import { NavLink } from 'react-router-dom';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


const ProjectManagementSidebar = () => {

    const [prevHoverStates, setHoverStates] = useState(Array(5).fill(false));

    const handleMouseOver = (index) => {
        setHoverStates(prevHoverStates => {
            const newHoverStates = [...prevHoverStates];
            // Create a copy of the previous state array
            newHoverStates[index] = !newHoverStates[index];
            // Toggle the hover state for the specified index
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
                text: "Overview",
                to_nav: "overview"
            },
            {
                svg_w: searchGear,
                svg_b: searchGear1,
                text: "Ongoing Reporting",
                to_nav: "ongoingReport"

            },
            {
                svg_w: moneyBag,
                svg_b: moneyBag1,
                text: "Financial Transactions",
                to_nav: "financialTransaction",
            },
            {
                svg_w: shoppingBag,
                svg_b: shoppingBag1,
                text: "Work Orders",
                to_nav: "workOrders",
            },
            {
                svg_w: token,
                svg_b: token1,
                text: "Token Management ",
                to_nav: "tokenManagement",
            }
        ]


    return (
        <div className='projectManagementSidebar'>
            <ul>
                {svgUsed.map((val, index, route) => (
                    <li key={index} className='colorChange' >
                        <NavLink to={val.to_nav} onMouseOver={() => handleMouseOver(index)} onMouseOut={() => handleMouseOut(index)}>

                            <Tooltip title={val.text} placement="right-start">
                                <Button>
                                    < img
                                        src={prevHoverStates[index] ? val.svg_b : val.svg_w}
                                        alt=""
                                    />
                                </Button>
                            </Tooltip>

                            <p>< img
                                src={prevHoverStates[index] ? val.svg_b : val.svg_w}
                                alt=""
                            />
                                {val.text}
                            </p>

                        </NavLink>

                    </li>
                ))}
            </ul>
        </div>

    );
}


export default ProjectManagementSidebar;
