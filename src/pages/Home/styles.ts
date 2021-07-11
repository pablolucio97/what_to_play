import styled from "styled-components";

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 720px;
    margin-top: -1rem;
  }

  @media (max-width: 720px) {
    width: 240px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }
`;

export const ReleasesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  margin: 0 auto;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 420px;
    margin-top: -1rem;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    margin-top: -1rem;
  }
`;

export const MiddleContentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 1200px;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 3rem;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 720px;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    margin-top: -1rem;
  }
`;

export const RecentGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MostPlayedGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GoogleButton = styled.button`
  width: 160px;
  border-radius: 8px;
  font-weight: 500;
  font-size: .96rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ea4335;
  color: #fff;
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  margin: 1rem;
  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    margin: 1rem;
  }
`;

export const Button = styled.button`
  width: 160px;
  border-radius: 8px;
  font-weight: 500;
  font-size: .96rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.secondary1};
  transition: all 0.2s ease-in-out;
  padding: .4rem;
  margin: 1rem;
  border: none;
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
  letter-spacing: .04rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 720px) {
    margin: 1rem;
  }
`;

export const LoginContainer = styled.div`

  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 1rem;
  margin-top: 1.2rem;
   span{
    color: ${props => props.theme.colors.text};
    font-weight: 400;
   }

   @media (max-width: 720px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem auto -3rem;
  }
`

export const FoundGamesContainer = styled.div`
  display: flex;
  margin: 4rem auto 2rem;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 110%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 1240px) {
    margin: 0 auto -1rem;
  }
  @media (max-width: 720px) {
    margin: 3rem 0 -3rem;
  }
`;

export const Search = styled.input`
  width: 320px;
  height: 32px;
  background: ${(props) => props.theme.colors.gray};
  color: #fff;
  border-radius: 2px;
  padding: .3rem .4rem;
  border: none;
  outline: none;
  font-size: 1rem;
  margin-left: 1rem;
  @media (max-width: 1240px) {
    margin-left: 1.8rem;
  }
  @media (max-width: 720px) {
    margin-left: 0;
  }
`


