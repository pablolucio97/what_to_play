import { ChangeEvent } from 'react'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { BiJoystickButton } from 'react-icons/bi'
import Switch from 'react-switch'
import {
    TitleContainer,
    Container,
    Title,
    MenuContainer,
} from './styles'




type HeaderProps = {
    search?: (e: ChangeEvent<HTMLInputElement>) => void;
    toggleTheme(): void;
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
                    onColor={colors.primary1}
                />
            </MenuContainer>
        </Container>
    )
}

export default Index;
