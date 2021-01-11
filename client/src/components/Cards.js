import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import ProductCard from "./ProductCard";

export default function Cards(props) {
    const products = props.product;

    const listCards = products.map((product) => {  
        <ListGroup.Item><ProductCard props={product} /></ListGroup.Item>        
    });

    return (
        <div>
            <h4> Productos </h4>
            <ListGroup variant="flush">
                {listCards}
            </ListGroup>
        </div>
    );
}
