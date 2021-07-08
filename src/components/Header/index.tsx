import { ChangeEvent } from 'react'
import { useContext } from 'react'
import {
    TitleContainer,
    Container,
    Title,
    MenuContainer,
    Linker,
    Search,
    Button
} from './styles'
import { BiJoystickButton, BiHeart } from 'react-icons/bi'



type SearchProps = {
    search?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Index = ({ search }: SearchProps) => {



 /*    const { title } = useContext(ThemeContext)

    const [currentTheme, setTheme] = userPersistThemeState('theme', dark)

    function handleTheme(){
        setTheme(currentTheme.title === 'dark' ? light : dark)
      }
   */
   


    return (
        <Container>
            <TitleContainer>
                <BiJoystickButton size={32} color='#fff' />
            </TitleContainer>
            <MenuContainer>
       {/*          <Switcher
                    checked={currentTheme.title === 'dark' ? true : false}
                    onChange={handleTheme}
                    width={45}
                    handleDiameter={22}
                    height={15}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    onColor={light.colors.primary1}
                    offColor={light.colors.gray2}
                /> */}

            </MenuContainer>
        </Container>
    )
}

export default Index;
