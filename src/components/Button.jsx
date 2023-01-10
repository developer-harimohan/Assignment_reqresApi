import React from "react";
import styled from "styled-components";

const Button = (props) => {
    return (
        <Wrapper>
            <button className="btnx" type={props.type}>{props.title}</button>
        </Wrapper>
    )
};
const Wrapper = styled.div`
.btnx{
    background-color: #764abc;
    color: white;
    padding: 8px 14px;
    border: 1px solid #764abc;
    border-radius: 7px;
    width: 100%;
    cursor: pointer;
}
    
`
export default Button;
