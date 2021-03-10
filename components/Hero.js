import React from 'react'
import styled from 'styled-components'

export default function Hero() {
    return (
        <Box className="box">
            <div className="ovl">
                <img src="/img/MAIN LOGO 1.1.png" alt="" />
            </div>
            <div className="text-section">
                <h3>Welcome To <span>OnDev</span> Technology</h3>
                <h1>Let's Devolop a Great Product</h1>
                <button>Let's Talk</button>
            </div>
            <div className="dev-imge">
                <img src='/img/test.png' />
            </div>
            <div className="svg">
                <img src="/img/wave.svg" alt=""/>
            </div>
        </Box>
    )
}

const Box = styled.div`
    position:relative;
    width:100%;
    min-height:100vh;
    padding:0 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    overflow-y:hidden;
    background-image:linear-gradient(215deg,#080E33 36%,#111E6C 85%,#192DA1 100%);

    .ovl{
        position:absolute;
        top:50%;
        left: 5%;
        transform:rotateZ(336deg) translateY(-50%);
        opacity:0.08;

        img{
            width:750px;
        }
    }

    .text-section{
        flex:0.4;
        font-family:'ubuntu',sans-serif;
        color:#fff;
        z-index:1;

        h3{
            font-size: 31px;
            font-weight: 400;
            margin-bottom:10px;
            span{
                color:#3499CC;
            }       
        }

        h1{
            font-size: 68px;
            margin-bottom:28px; 
            letter-spacing:1.3px;   
        }
        button{
            width:200px;
            padding:12px 0;
            font-size: 22px;
            border-radius:5px;
            border:1px solid transparent;
            background-color: #47518B;    
            color:#fff;
            letter-spacing:1.2px
        }
    }
    .dev-imge{
        flex:0.6;
        min-height:85vh;
        display:flex;
        justify-content:flex-start;
        align-items:flex-end;

        img{
            width:700px;
        }
    }
    .svg{
        position:absolute;
        bottom: -5px;
        left: 0;
        right:0;
        width:100%;

        img{
            width:100%;
        }
    }
`;
