import styled from '@emotion/styled';

export const S = {
    Container: styled.div`
    width:100vw;
    height: 100vh;
    background: #add8e6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    `,

    CountValue: styled.h1`
    font-size:30rem;
      @media screen  and (max-width: 768px){
         font-size:2rem;
      }
      @media screen  and (max-width: 480px){
         font-size:11rem;
      }
    `,

    ButtonContainer: styled.div`
    width:30%;
    height: 20%;
    display: flex;
    align-items: center;
    @media screen  and (max-width: 768px) {
        width: 50%;
    }
       @media screen  and (max-width: 480px) {
        width: 80%;
    }
    `,

    Button: styled.button`
    width: 300px;
    height: 70px;
    font-size: 3rem;
    border: 1px solid #000;
    cursor: pointer;
    background: #ccc;
    color: #000;
    transition: .4s;
        &:hover {
            background: #add8e6;  
        }
    `,

};
