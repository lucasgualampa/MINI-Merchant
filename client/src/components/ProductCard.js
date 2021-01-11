import React, { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";


export default function ProductCard(props) {
    return (
        <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={props.product.thumbnail} />
            <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>ID: {props.product.id}</ListGroupItem>
                <ListGroupItem>PRECIO: {props.product.price} {props.product.currency_id}</ListGroupItem>
                <ListGroupItem>CANTIDAD: {props.product.available_quantity}</ListGroupItem>
                <ListGroupItem>CONDICIÓN: {props.product.condition}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">Comprar</Card.Link>
                <Card.Link href="#">Comparar</Card.Link>
            </Card.Body>
        </Card>
    );
}
