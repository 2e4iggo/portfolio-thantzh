export interface ITheme {
black: string;
white: string;
primaryColor: string;
primaryColorLight: string;
gray_1: string;
background: string;
textColor: string;

}
export const lightTheme: ITheme = {
black: '#000000',
white: '#FFFFFF',   
primaryColor: '#3B82F6', // Blue-500
primaryColorLight: '#60A5FA', // Blue-400
gray_1: '#6B7280', // Gray-500
background: '#F9FAFB', // Gray-50
textColor: '#111827', // Gray-900
};  
export const darkTheme: ITheme = {
black: '#000000',
white: '#FFFFFF',   
primaryColor: '#3B82F6', // Blue-500
primaryColorLight: '#60A5FA', // Blue-400
gray_1: '#9CA3AF', // Gray-400      
background: '#1F2937', // Gray-800
textColor: '#F3F4F6', // Gray-100
};

export const THEME = {
light: lightTheme,
dark: darkTheme,
};  

declare module "styled-components" {
// eslint-disable-next-line
export interface DefaultTheme extends ITheme {}
}