import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import Cards from './Cards';
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { searchProducts } from "../actions";
import NewPagination from "../components/NewPagination";
import { Container, Row, Col } from "react-bootstrap";
import Categories from "../components/Categories";

export default function Catalogue() {
    var results = useSelector((state) => state.results); // saco dato de estado del store
    const dispatch = useDispatch();
    const location = useLocation();

    var params = new URLSearchParams(location.pathname.slice(1)); // URL sirve para los parametros de busqueda
    var item = params.get("item");
    var condition = params.get("condition");
    var sort = params.get("sort");
    var page = params.get("page");

    useEffect(() => {
        window.scrollTo(0, 0);

        item && dispatch(searchProducts(item, condition, sort, page));
    }, [item, sort, condition, page]);

    return (
        <div>
            <div>
                <Categories />  
            </div>
            <div>
            <Container fluid className="grid">
                <Row>
                        {results.results &&
                            results.results.map((product) => {
                                return <ProductCard product={product} />;
                            })}
                </Row>
            </Container>
            <NewPagination
                total={
                    results.paging && results.paging.total < 1000
                        ? results.paging.total
                        : 1029
                }
            />
            </div>
        </div>
    );
}
