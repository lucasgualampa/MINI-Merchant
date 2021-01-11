import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";

export default function SearchBar() {

    const history = useHistory()
    const [input, setInput] = useState("");
  
    const handleChange = (e) => {
      setInput(e.target.value);
    };
  
    const handleSearch = () => {
      history.push(`item=${input}`)
    };

    return (
        <ReactBootStrap.Form inline>
            <ReactBootStrap.FormControl
                type="text"
                placeholder="Buscar..."
                className="mr-sm-2"
                value={input}
                onChange={handleChange}
            />
            <ReactBootStrap.Button variant="outline-light" onClick={handleSearch}>
                Search
            </ReactBootStrap.Button>
        </ReactBootStrap.Form>
    );
}
