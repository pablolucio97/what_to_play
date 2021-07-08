import { ChangeEvent } from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import {
    TitleContainer,
    Container,
    Title,
    MenuContainer,
    Search,
    Button
} from './styles'
import { BiJoystickButton, BiHeart } from 'react-icons/bi'
import Switch from 'react-switch'



type HeaderProps = {
    search?: (e: ChangeEvent<HTMLInputElement>) => void;
    toggleTheme():void;
}


const Index = ({ search, toggleTheme }: HeaderProps) => {



       const { title, colors } = useContext(ThemeContext)
   


    return (
        <Container>
            <TitleContainer>
                <BiJoystickButton size={32} color='#fff' />
                <Title>WhatToPlay</Title>
            </TitleContainer>
            <MenuContainer>
                <Switch
                    checked={title === 'light' ? false : true}
                    onChange={toggleTheme}
                    width={45}
                    handleDiameter={22}
                    height={15}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor={colors.secondary1}
                />

            </MenuContainer>
        </Container>
    )
}

export default Index;
