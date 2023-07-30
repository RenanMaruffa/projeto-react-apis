import styled from "styled-components"

export const MainContainer = styled.main`
    background-color: #5D5D5D;
    min-height: 80vh;
    display: flex;
    justify-content: center;
`;

export const PokeInfosContainer = styled.main `
    height: 80vh;
    width: 90vw;
    margin: 20px 10vw;
    display: flex;
    justify-content: space-evenly;
    background-color: ${(props) => props.colorType};
    border-radius: 10px;
    position: relative;
`

export const ImagesContainer = styled.div`
    align-self: center;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ImgWrapper = styled.img`
    height: 30vh;
    background: #f1f1f1;
    border-radius: 10px;
    margin-bottom: 10px;
`

export const StatsContainer = styled.div `
    background: #f1f1f1;
    align-self: center;
    height: 75%;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 20px;
    z-index: 1;
    border-radius: 8px;
`

export const TitleContainer = styled.h2`
    margin: 5px;
    align-self: center;
`

export const TypeAndMovesContainer = styled.div`
    align-self: center;
    height: 75%;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 0;
`;

export const TypesContainer = styled.div`
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: white;
`;

export const MovesContainer = styled.div`
    background: #f1f1f1;
    height: 70%;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding:10px;
    p{
        background-color: #ECECEC;
        max-width: 40%;
        height: 40px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        border: 1px dashed rgba(0, 0, 0, 0.14);
        padding-left: 10px;
    }
`;

export const TypeImg = styled.img`
    width: 91px;
    height: 35px;
    margin: 3px;
`;

export const PokeImg = styled.img`
    width: 193px;
    height: 193px;
    position: absolute;
    top: -50px;
    right: 0px;
`;

export const PokeballImg = styled.img`
    position: absolute;
    height: 100%;
    top: 0px;
    right: 0px;
    z-index: 0;
`;

export const ProgressContainer = styled.div`
    height: 75%;
    section{
        display: grid;
        grid-template-columns: 2fr 1fr 3fr;
    }
`;

export const DivProgress = styled.div`
    width: 100%;
    height: 10px;
`;

export const ProgressBar = styled.div`
    height: 10px;
    background-color: #FF7C2E;
    width: ${(props) => props.widthBar}%;
    display: flex;
    border-radius: 8px;
`;

export const PStatsName = styled.p`
    display: flex;
    justify-content: end;
`

export const PStatsNumber = styled.p`
    display: flex;
    justify-content: center;
`

