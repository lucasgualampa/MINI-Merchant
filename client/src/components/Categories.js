import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
//import "./Categories.css";
import { Button, ListGroup } from "react-bootstrap";
//import { Link } from 'react-router-dom';

export default function Categories() {
    const history = useHistory();
    const location = useLocation();
    var params = new URLSearchParams(location.pathname.slice(1));
    const [clear, setClear] = useState(false);

    const sort = (arg) => {
        setClear(true);
        params.delete("sort");
        params.append("sort", arg);
        history.push(params.toString());
    };

    const filter = (condition) => {
        setClear(true);
        params.delete("condition");
        params.append("condition", condition);
        history.push(params.toString());
    };

    const clearFilters = () => {
        setClear(false);
        params.delete("condition");
        params.delete("sort");
        history.push(params.toString());
    };

    return (
        <ListGroup  horizontal>
            <ListGroup.Item >
                {clear && (
                    <div>
                        <Button variant="dark" onClick={clearFilters}>
                            Limpiar Busqueda
                        </Button>{" "}
                    </div>
                )}
            </ListGroup.Item>
            <ListGroup.Item >
                <Button variant="primary" onClick={() => sort("desc")}>
                    Mayor Precio
                </Button>{" "}
            </ListGroup.Item>
            <ListGroup.Item >
                <Button variant="primary" onClick={() => sort("asc")}>
                    Menor Precio
                </Button>{" "}
            </ListGroup.Item>
            <ListGroup.Item >
                <Button variant="primary" onClick={() => filter("new")}>
                    Nuevos
                </Button>{" "}
            </ListGroup.Item>
            <ListGroup.Item >
                <Button variant="primary" onClick={() => filter("used")}>
                    Usados
                </Button>{" "}
            </ListGroup.Item>
        </ListGroup>
    );
}
