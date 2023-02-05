import React from 'react'
import { Container, Header, Photo, UserGreeting, UserInfo, UserName, User, UserWrapper } from './styles'

export function Dashboard() {
    return (
        <Container>
            <Header>
                <UserWrapper>
                <UserInfo>
                    <Photo source={{uri:'http://github.com/yale1995.png'}}/>
                    <User>
                        <UserGreeting>Olá,</UserGreeting>
                        <UserName>Yale Henrique</UserName>
                    </User>
                </UserInfo>
                </UserWrapper>
            </Header>
        </Container>
    )
}