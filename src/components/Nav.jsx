import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index.js";

const Nav = () => {
    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex items-center justify-between max-container">
                <a href="/">
                    <img src={headerLogo} width={130} height={29} alt="Logo" />
                </a>
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((navLink) => (
                        <li key={navLink?.label}>
                            <a
                                href={navLink?.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {navLink?.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                  <img src={hamburger} alt="Hamburger" width={25} height={25}/>
                </div>
            </nav>
        </header>
    );
};

export default Nav;
