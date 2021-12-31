import React from 'react';
import styled from "styled-components"

const Container = styled.div`
 height: 30px;
 background-color: teal;
 color: white;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 14px;
 font-weight:500;`


function Announcement() {
    return (
        <Container>
            Súper Descuento! Envio gratis en pedidos desde $50.000
        </Container>
    )
}

export default Announcement
