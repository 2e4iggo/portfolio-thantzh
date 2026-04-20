import React, { useContext } from "react";
import { NavigationMenuAction, NavigationMenuContainer, NavigationMenuItem, NavigationMenusBox } from "./NavigationMenu.styles";
import { AppContext } from "../AppWrapper/AppWrapper";
import { NavigationMenus } from "./NavigationMenu.utils";
import { RxFontFamily } from "react-icons/rx";
import { RiEnglishInput } from "react-icons/ri";
import { TbBulb, TbBulbOff } from "react-icons/tb";
import { usePathname } from "next/navigation";
const NavigationMenu = () => {

    const pathname = usePathname();

    const {currentLanguage, theme,toggleLanguage,themeType,toggleTheme} = useContext(AppContext)!;
   
    const LanguageIcon = currentLanguage === "en" ? 
    (<RxFontFamily color={theme.textColor} size={20}/>):(<RiEnglishInput color={theme.textColor} size={20}/>);
    
    const ThemeIcon = themeType === "light" ? 
    (<TbBulb color={theme.textColor} size={24}/>):(<TbBulbOff color={theme.textColor} size={24}/>);
    
    return (
        <NavigationMenuContainer>
            <NavigationMenuAction onClick={()=>toggleLanguage()}>
            {LanguageIcon}
            <p className="tooltip">change language</p>
            </NavigationMenuAction>
            <NavigationMenuAction onClick={()=>toggleTheme()}>
            {ThemeIcon}
            <p className="tooltip">change theme</p>
            </NavigationMenuAction>
            <NavigationMenusBox>    
                 {NavigationMenus(theme).map(({href, icon, title}, index) => (
                    <NavigationMenuItem className={pathname === href ? "active":""} href={href} key={index}>
                        {icon}
                        {pathname != href &&
                            <p className="tooltip">{title}</p>}
                    </NavigationMenuItem>
                    ))}
            </NavigationMenusBox>
        </NavigationMenuContainer>
    )
}
export default NavigationMenu