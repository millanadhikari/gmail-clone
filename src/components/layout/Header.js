import React from 'react'
import './Header.css'
import styled from 'styled-components'

function Header() {
    return (
       <Wrapper>
           <LogoWrapper>
               <div>
                    <p>logo</p>
               </div>
               <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r2.png"></img>
           </LogoWrapper>
       </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    background-color: orange;
    height: 200px;
`
const LogoWrapper = styled.div`
`