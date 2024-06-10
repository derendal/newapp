
import React from "react";
import "./Menu.css";
import { SeedlingIcon, MountainCity, TreeCity, WormIcon } from "../Icons/Icons";

function Menu() {

  return (
    <div className="menu_box">
        
        <div className="header_div">
            <div className="top_menu_border_box heading_one">
                <div><a id="logopage"><SeedlingIcon/>LOGO</a></div>
                <input type="text" placeholder="Search.."></input>
            </div>
            <div className="top_menu_box">
                <ul className="top_menu_ul">
                    <li><a href="#" className="menu_link"><div><SeedlingIcon />Pierwszy element</div></a></li>
                    <li><a href="#"  className="menu_link"><div><MountainCity />Drugi element</div></a></li>
                    <li><a href="#" className="menu_link"><div><TreeCity />Trzeci element</div></a></li>
                    <li><a href="#" className="menu_link"><div><WormIcon />Czwarty element</div></a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Menu;
