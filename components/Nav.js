import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export default function Nav() {
    return (
        <NAV>
            <NavMain>
                <Log className="log">
                    <StyledImage src='/img/L1.png' alt="logo"  width={140} height={50}/>
                </Log>
                <List className="list-col">
                    <Ul>
                        <li>HOME</li>
                        <li>ABOUT</li>
                        <li>SERVICES</li>
                        <li>CONTACT</li>
                        <li>OnDev SHOP</li>
                    </Ul>
                    <button>
                        LET'S TALK
                    </button>
                </List>
            </NavMain>
        </NAV>
    )
}

const NAV = styled.nav`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:12px 5px;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
`;
const NavMain = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
`
const Log = styled.div`
    flex:0.2;
`;
const List = styled.div`
    flex:0.8;
    font-family:'ubuntu',sans-serif;
    font-size:16px;
    display:flex;
    justify-content:flex-end;
    align-items:center;

    button{
        width:150px;
        padding:12px 0;
        background:transparent;
        border:2px solid #2039CC;
        border-radius:5px;
        color:#fff;
        cursor:pointer;
    }
`;
const Ul = styled.ul`
    list-style:none;
    display:flex;
    align-items:center;
    
    li{
        padding: 0 28px;
        font-size:14px;
        color:#fff;
        cursor:pointer;
    }
`;
const Button = styled.button`
    
`;
const StyledImage = styled(Image)`
    width:260px;
`;