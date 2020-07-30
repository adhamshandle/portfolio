import styled from 'styled-components'

export const AboutContainer = styled.div `
text-align: center;
margin-left: 10%;
margin-right: 10%;
margin-top:20px;
`

export const Header = styled.h1 `
color: #1f2737;
font-family: cairo;
text-decoration: underline;
width: 100%;`

export const ImgContainer = styled.div `
display: block;
flex-basis: 0;
flex-grow: 1;
flex-shrink: 1;
padding: .75rem;
`
export const JobTitle = styled.b `
font-size: 1.5rem;
color: #1f2737;
font-family: cairo;
width:80%;
text-align:justify;
direction: ltr;
display:block;
`
export const ImgItSelf = styled.img `
src: ${props => props.src};
height: 300px;
width:300px;
border-radius: 50%;
`
export const IntroContainer = styled.div `
background-color: #1f2737;
width: 100%;
text-align:center;
margin-right:unset;
margin-left:unset;

`
export const IntroBrief = styled.h1 `
margin-top: 5%;
color: white;
display:flex;
justify-content: center;
width:100%;
`

export const Name = styled.span `
color: #ed6c82 !important;
font-family: Over the Rainbow,cursive;
display: contents;
`

export const Contact = styled.a `
background: transparent;
height: 50px;
width: 8rem;
font-size: 1.2rem;
color: #ed6c82 !important;
font-family: cairo;
text-align: center;
margin:auto;
letter-spacing: 2px;
border: 1px solid  #ed6c82;
padding:8px;
cursor: pointer;
font-weight: 700;
&:hover {
    background-color: #ed6c82;
    color: #1f2737 !important;
    border: 1px solid  #ed6c82;
  }
text-transform: uppercase;

`
export const NavContainer = styled.div `
font-family: cairo;
height: 80px;
color:white;
`