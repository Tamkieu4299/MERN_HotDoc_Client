import React, { useContext, useEffect, useState } from "react"; 
import { Button, Card, ThemeProvider, Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import "./Drugstore.css";
// import { proto } from './data';
import ProductItem from "./ProductItem";
import QuantityButton from "./QuantityButton";
import axios from "axios";


const Drugstore = () => { 

    const [drugs, setDrugs] = useState([]); 

    const generateItem = () => {
        return drugs.map((item) => <ProductItem  drugItem={item} />);
    };
    
    useEffect( () => {
        const fetchDrugs = async () => {
             const drugProtoData = await axios.get("/drugStore"); 
             setDrugs(drugProtoData.data);
        };
        fetchDrugs();
    }, []);

    return (
    <>
        <Navbar />
                <Row className="">
                <Col className="col-filter d-flex justify-content-center" lg="2">
                    <Card className="productItem " style={{ width: 250, height: 350}}>
                        <div>
                            <QuantityButton></QuantityButton>    
                        </div>
                         
                    </Card>
                </Col>
                <Col className="col-druglist" lg="10">
                    <Row className="drugDisplay">
                        {generateItem()}    
                    </Row>
                </Col>
                </Row>
    </>
    );
}; 

export default Drugstore; 
