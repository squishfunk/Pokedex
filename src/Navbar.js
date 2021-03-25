import React from "react";

const Navbar = ({ value, onChange }) => {

    return (
        <nav>
            <img src="pokedex.png" alt="" />
            <div className="input-data">
                <input type="text" spellCheck="false" required value={value} onChange={onChange} />
                <label>Search</label>
            </div>
        </nav>
    )
}

export default Navbar;