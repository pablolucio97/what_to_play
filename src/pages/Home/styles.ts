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
    width: 420px;
    margin-top: -1rem;
  }

  @media (max-width: 720px) {
    width: 240px;
    display: flex;
    align-items: center;
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
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 240px;
    margin-top: -1rem;
  }
`;

export const FoundGamesContainer = styled.div`
  display: flex;
  margin: 4rem auto 2rem;
  width: 100%;
  height: 60vh;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const RecentGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MostPlayedGamesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LibraryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  margin: 2rem auto;
  padding: 1rem;

  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 640px;
    margin-top: 3rem;
    padding: 0;
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
  width: 1120px;
  background: ${(props) => props.theme.colors.background};
  border-radius: 4px;
  margin: 3rem auto;
  padding: 1rem;
  
  @media (max-width: 1240px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 700px;
    padding: 0;
  }

  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 340px;
    background: ${(props) => props.theme.colors.gray};
  }
`;

export const EmptyLibraryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #fff;
  width: 80%;
  height: 610px;
  background: ${(props) => props.theme.colors.gray};
  border-radius: 4px;
  margin: 1rem auto;
`;
