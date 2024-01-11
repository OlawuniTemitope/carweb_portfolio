import exp from "constants";
import { MouseEventHandler } from "react";

export interface customButtonProps{
    btnType?: 'button' | 'submit';
    title:string;
    containerStyles?:string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    textStyles?:string;
    rightIcon?:string
    isDisabled?:boolean;
}

export interface searchManufacturerProps{
    manufacturer:string;
    setManufacturer:(manufacturer:string)=>void;
}
export interface carProp{
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;}

export interface filterProps{
    manufacturer: string,
    year:number,
    fuel:string,
    limit:number,
    model:string,
  }
export interface optionProps{
    title:string;
    value:string
}
  export interface customFilterProp {
    title:string;
    options:optionProps[];
  }
  export interface ShowMoreProps{
    pageNumber:number;
    isNext:boolean;
  }