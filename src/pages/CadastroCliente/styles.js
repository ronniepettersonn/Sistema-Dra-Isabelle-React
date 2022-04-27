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

export const MenuFloatStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 18px;
    border-radius: 8px;
    gap: 10px;
    position: absolute;
    right: 0px;
    top: 20px;
    background: white;
    box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, .1);
    min-width: 150px;
    width: 100%;

    visibility: ${({ show }) => (show ? 'visibility' : 'hidden')}
`

