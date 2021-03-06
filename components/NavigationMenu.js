import React, { useEffect } from "react";
import { gsap } from "../node_modules/gsap/dist/gsap.js";
import { Link } from "react-scroll";

function NavigationMenu() {
	const menuPages = [
		{ id: "landingPage", link: "/", label: "TOP" },
		{ id: "about", link: "/about", label: "ABOUT" },
		{ id: "projects", link: "/projects", label: "PROJECTS" },
		{ id: "contactMe", link: "/contact-me", label: "CONTACT ME" },
	];

	useEffect(() => {
		gsap.to(".navMenu", {
			duration: 1,
			ease: "power1.inOut",
			x: 40,
		});
	}, []);

	return (
		<ul className='w-full d-flex flex-row lg:space-y-1'>
			{menuPages.map((item) => (
				<Link
					key={item.id}
					activeClass='text-theme-blue-dark'
					to={item.id}
					smooth={true}
					duration={1000}
					spy={true}>
					<li className='navMenu font-medium text-lg md:text-xl xl:text-[1.2rem] 2xl:text-[2.2rem] 2xl:py-2 hover:text-theme-blue-dark cursor-pointer'>
						{item.label}
					</li>
				</Link>
			))}
		</ul>
	);
}

export default NavigationMenu;
