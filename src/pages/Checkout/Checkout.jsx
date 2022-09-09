import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';

import { Button, Container, Form, Table } from "react-bootstrap";
import Navbar from "../../components/navbar/Navbar";
import { ProductContext } from '../drugstore/productContext';
import "./Checkout.css";

const Checkout = () => {
    const { products } = useContext(ProductContext);
    console.log(products);

    const [customerPhoneNumber, setPhoneNumber] = useState("");
    const [customerAddress, setCustomerAddress] = useState("");
    const [orders, setOrders] = useState([]);
    const formatData = data => {
        let drugsDistinct = [];
        for (const drugItem of data) {
            if (!drugsDistinct.includes(drugItem.id)) {
                drugsDistinct.push(drugItem.id);
            }
        }

        let results = [];
        for (const drugId of drugsDistinct) {
            const drugQty = data.reduce((total, drugItem) => {
                if (drugItem.id === drugId) {
                    return (total = total + 1);
                }
                return total;
            }, 0);
            const drugItem = data.find(drug => drug.id === drugId);

            results.push({
                drugId: drugItem.id,
                drugName: drugItem.name,
                drugQuantity: drugQty,
                drugPrice: drugItem.price,
            });
        }
        return results;

    };

    useEffect(() => {
        if (products) {
            const productFormated = formatData(products)
            setOrders(productFormated);
        }
    }, [products]);

    const renderOrders = orders.map((order, index) =>
        <tr>
            <td>{index + 1}</td>
            <td>{order.drugName}</td>
            <td>{order.drugPrice}</td>
            <td>{order.drugQuantity}</td>
        </tr>);
    return (
        <>
            <Navbar />
            <Container>
                <h1 className='cartTitle'>Cart Checkout</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr className='ahihi'>
                            <th>#</th>
                            <th>Drug Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderOrders}
                    </tbody>
                </Table>
                <Form>
                    <Form.Group
                        className='mb-3'
                        onChange={e => {
                            setCustomerAddress(e.target.value);
                        }}
                    >
                        <Form.Label>Customer address</Form.Label>
                        <Form.Control placeholder='Enter Address' />
                    </Form.Group>
                    <Form.Group
                        className='mb-3'
                        onChange={e => {
                            setPhoneNumber(e.target.value);
                        }}
                    >
                        <Form.Label>Customer Phone Number</Form.Label>
                        <Form.Control placeholder='Enter Your Phone Number' />
                    </Form.Group>
                </Form>
                <Button
                    onClick={() => {
                        const totalPrice = orders.reduce((total, order) => {
                            const { drugPrice, drugQuantity } = order;
                            const orderPrice = Number(drugPrice) * Number(drugQuantity);
                            return total + orderPrice;
                        }, 0);

                        const orderProductIds = orders.map(order => order.drugId);

                        const body = {
                            orderStatus: 'Pending',
                            orderPhoneNumber: customerPhoneNumber,
                            orderAddress: customerAddress,
                            orderTotalPrice: totalPrice,
                            productId: orderProductIds,
                        };

                        axios.post('/drugOrder', body);
                    }}
                >
                    Create Order
                </Button>
            </Container>
        </>
    );
};

export default Checkout;