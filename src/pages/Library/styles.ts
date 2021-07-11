import styled from "styled-components";

export const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  margin: 1rem auto;
  padding: 2rem;
  
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    margin-top: 3rem;
  }
  
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    margin-top: 3rem;
    padding: 0;
  }
  `;

export const LibraryPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  width: 1120px;
  border-radius: 4px;
  margin: 0 auto;
  padding-top: 2rem;
  
  h1{
    color: ${(props) => props.theme.colors.text}
  }
  
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
  }
  
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    color: #fff;
    margin: 2rem auto;
    padding-top: 0;
  }
`;

export const EmptyLibraryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  width: 80%;
  height: 440px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  margin: 1rem auto;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  button {
    border: none;
    color: ${(props) => props.theme.colors.text};
    background: transparent;
    font-size: 1rem;
    &:hover {
      cursor: pointer;
    }
  }

  @media (max-width: 720px) {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 1rem auto -3rem;
  }
`;
