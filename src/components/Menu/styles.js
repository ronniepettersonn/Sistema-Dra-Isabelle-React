import styled from 'styled-components'
import { css } from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
`

export const ListMenu = styled.ul`
    display: flex;
    flex-direction: column;

    list-style: none;

`

export const LogoImg = styled.img`
    height: 40px;
`

export const Aside = styled.aside`
    flex-basis: 249px;
    min-width: 249px;
    background: #fafafd;
`

export const LinkStyle = {
    textDecoration: "none",
    color: '#010f1d',
}
