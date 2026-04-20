import { AiOutlineHome } from "react-icons/ai";
import { BiCodeBlock } from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { MdOutlineSchool, MdOutlineWorkOutline } from "react-icons/md";
import { DefaultTheme } from "styled-components";

export const NavigationMenus = (theme: DefaultTheme) => {
	return [
		{
			title: "Home",
			icon: <AiOutlineHome color={theme.textColor} size={20} />,
			href: "/",
		},
		{
			title: "Projects",
			icon: <BiCodeBlock color={theme.textColor} size={20} />,
			href: "/projects",
		},
		{
			title: "Work history",
			icon: <MdOutlineWorkOutline color={theme.textColor} size={20} />,
			href: "/workhistory",
		},
		{
			title: "Skills",
			icon: <FaCode color={theme.textColor} size={20} />,
			href: "/skills",
		},
		{
			title: "Education",
			icon: <MdOutlineSchool color={theme.textColor} size={20} />,
			href: "/education",
		},
	];
};
