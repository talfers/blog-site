import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 0 15%;
  width: 100%;
`

export const PageContent = styled.div`
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: flex-start;
`
export const Main = styled.div`
  background: #f5f5f5;
  flex: 1 1 70%;
  padding: 40px;
  min-height: 200px;
  margin: 0 1rem;

  &> div {
    background: #fff;
    width: 100%;
    min-height: 100px;
    box-shadow: 0px 0px 4px 0px lightgrey;
    padding: 2rem;

  }
`

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 30%;
  margin: 0 1rem;

  div {
    min-height: 150px;
    width: 100%;
    border: 1px lightgrey solid;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;

    img {
      width: 240px;
      height: 240px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`
