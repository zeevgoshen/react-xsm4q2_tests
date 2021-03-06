import React from "react";
import styled from 'styled-components'
import Button from './Button'

export const StyledButton = styled(Button)`
    width:200px;
    height:50px;
    background-color: ${(props => props.backgroundColor)};

    &:hover {
        background-color: coral;
        & label {
            color:green;
        }
    }

    &:active {
        background-color: yellow;
    }
`


export const ButtonLabel = styled.label`
    font-size: 25px;
    color: white;
`
