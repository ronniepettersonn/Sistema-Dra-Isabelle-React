import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    height: 100vh;
`

export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`
export const Span = styled.span`
    font-size: 26px;
`
export const PrimaryCard = styled.div`
    background: rgb(202, 187, 147);
    display: flex;
    flex-grow: 3;
    flex-direction: column;
    //background: #1c294d;
    //min-width: 620px;
    width: 620px;
    color: #fff;
    padding: 20px;
    height: 300px;
`

export const SecondaryCard = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background: #fff;
    min-width: 280px;
`
export const SecondaryCardItem1 = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    border: 1px solid #f3f3f3;
    padding: 20px;
`

export const DashboardDisplay = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap:20px
`

