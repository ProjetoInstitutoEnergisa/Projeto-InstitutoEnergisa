import styled from "styled-components";
import backgroundImage from '../../assets/Foto1.jpg';

export const ImageContainer = styled.div`
    margin-top: 40px;
    margin-left: 40px;
`;

export const SubTitle = styled.div`
    
    font-size: 30px; 
    margin-top: 100px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    color: #026B31; 
    text-align: center; 
`;

export const SubTitleNoMargin = styled(SubTitle)`
  margin-top: 0; /* Remove a margem superior do segundo SubTitle */
`;

export const Container = styled.div`

background-color: #F2F2F2;
border-radius: 10px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.22), 0 2px 20px rgba(0, 0, 0, 0.22);
position: relative;
overflow: hidden;
width: 678px;
max-width: 100%;
min-height: 400px;
margin: 0 auto;
margin-top: 20px;

`;

export const CadastroContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
opacity: 0;
z-index: 1;

  ${props => props.login !== true ? `
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;`
    : null}
`;

export const LoginContainer = styled.div`
position: absolute;
top: 0;
height: 100%;
transition: all 0.6s ease-in-out;
left: 0;
width: 50%;
z-index: 2;

  ${props => (props.login !== true ? `
  transform: translateX(100%);`
    : null)}
`;

export const Form = styled.form`
background-color: #F2F2F2;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 50px;
height: 100%;
text-align: center;
`;

export const Title = styled.h1`
font-weight: bold;
margin: 0;
font-size: 20px;
`;

export const Input = styled.input`
background: #EBEBEB;
border: 1px solid;
border-radius: 50px;
padding: 12px 15px;
margin: 8px 0;
width: 100%;
`;

export const Button = styled.button`
border-radius: 20px;
border: 1px solid #3D987F;
background: linear-gradient(90deg, #0097B2, #7ED957);
color: #ffffff;
font-size: 12px;
font-weight: bold;
padding: 12px 45px;
letter-spacing: 1px;
text-transform: uppercase;
transition: transform 80ms ease-in;

  &:active{
    transform: scale(0.95);
  }
  &:focus {
    outline: none;
  }
`;

export const LeftButton = styled(Button)`
background-color: transparent;
border-color: #ffffff;
`;

export const Anchor = styled.a`
 color: #333;
 font-size: 14px;
 text-decoration: none;
 margin: 15px 0;
 `;

export const OverlayContainer = styled.div`

position: absolute;
top: 0;
left: 50%;
width: 50%;
height: 100%;
overflow: hidden;
transition: transform 0.6s ease-in-out;
z-index: 100;

  ${props => props.login !== true ? `
  transform: translateX(-100%);`
    : null}
`;

export const Overlay = styled.div`
background-image: url(${backgroundImage});
/* background: #ff416c;
background: -webkit-linear-gradient(to right, #ff4b2b, #ff416c);
background: linear-gradient(to right, #ff4b2b, #ff416c); */
background-repeat: no-repeat;
background-size: cover;
background-position: 0 0; 
color: #ffffff;
position: relative;
left: -100%;
height: 100%;
width: 200%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;

  ${props => (props.login !== true ? `
  transform: translateX(50%);`
    : null)}
`;

export const Painel = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 0 40px;
text-align: center;
top: 0;
height: 100%;
width: 50%;
transform: translateX(0);
transition: transform 0.6s ease-in-out;
 `;

export const EsquerdoPainel = styled(Painel)`
   transform: translateX(-20%);

   ${props => props.login !== true ? `
   transform: translateX(0);`
    : null}
 `;

export const DireitoPainel = styled(Painel)`
     right: 0;
     transform: translateX(0);

     ${props => props.login !== true ? `
    transform: translateX(20%);`
    : null}
 `;

export const Paragraph = styled.p`
font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px
`;