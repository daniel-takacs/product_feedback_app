import styled from 'styled-components'

export const SidebarButton = styled.button `
    background-color: ({ active }) => active ? #4661E6 : #F2F4FF;
    color: #4661E6;
    &:hover {
        background-color: #96a0d3 ;
    }
    &:active{
        background-color: #4661E6 ;
        color: white;
        border: none;
    }
    display: block;
    padding: 8px 10px;
    border: none;
    border-radius: 8px;
    height: 30px;
    font-weight: 700;
    margin: 5px;
    border: none;
`