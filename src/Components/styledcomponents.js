import styled from 'styled-components'

export const AboutContainer = styled.div `
text-align: center;
margin-left: 10%;
margin-right: 10%;
margin-top:20px;
`

export const SocialContainer = styled.div `
background-color: #1f2737;
padding-top: 20px;
display:block;
text-align: center;

`
export const CopyRights = styled.p `
display:block;
color: white !important;
width: 100%;
font-size: 16px;
`
export const NameCopyRights = styled.span `
font-size: 1rem;
color: #ed6c82;
display: unset !important;
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
height: 250px;
    width: 60%;
border-radius: 50%;
@media (max-width: 768px) {
  width: 100%;
}
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

export const Name = styled.p `
color: #ed6c82 !important;
font-weight: 900;
font-family: Over the Rainbow,cursive;
display: contents;
`
export const WorkHistoryCard = styled.div `
width:100%;
box-shadow: 0 4px 6px rgba(0,0,0,.3);
padding: 10px 10px 25px;
transition: all .15s linear;
z-index: 0;
text-align: center;
&:hover {
    transform: rotate(0deg);
    transform: scale(1.0);
    z-index: 10;
    box-shadow: 0 10px 20px rgba(97,94,94,.26);

  }
`
export const Contact = styled.span `
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