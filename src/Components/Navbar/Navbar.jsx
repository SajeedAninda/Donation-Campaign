import React from 'react';
import logo from "../../../Resources/Logo.png";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center py-6'>
            <Link to={"/"}>
                <div className="logo w-[180px]">
                    <img src={logo} alt="" />
                </div>
            </Link>
            <div className="links flex gap-10">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold" : ""
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/donation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold" : ""
                    }
                >
                    Donation
                </NavLink>


                <NavLink
                    to="/stats"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#FF444A] font-bold" : ""
                    }
                >
                    Statistics
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;