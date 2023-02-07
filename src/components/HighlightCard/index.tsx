import React from 'react'
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from './style'

export function HighlightCard() {
    return (
        <Container>
            <Header>
                <Title>Entrada</Title>
                <Icon name='arrow-up-circle'/>
            </Header>

            <Footer>
                <Amount>R$ 17.123,00</Amount>
                <LastTransaction>Última entrada dia 06 de dezembro</LastTransaction>
            </Footer>
        </Container>
    )
}
