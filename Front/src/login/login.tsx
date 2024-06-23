"use client"
import React from 'react'
import * as Components from "../Components/Components"


function Login() {
    const [signIn, toggle] = React.useState(true);

    function RedirectToOAuth() {

       window.location.href = "https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-9cee2e9030dd9a1da9e02120bb26ac7abf940260ed9ba7ae8a0c75381779704d&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2F42%2Fcallback&response_type=code"
    }
     
    return(
         <Components.Container>
             <Components.SignUpContainer signinIn={signIn}>
                 <Components.Form>
                     <Components.Title>Create Account</Components.Title>
                     <Components.Input type='text' placeholder='Name' />
                     <Components.Input type='email' placeholder='Email' />
                     <Components.Input type='password' placeholder='Password' />
                     <Components.Button>Sign Up</Components.Button>
                 </Components.Form>
             </Components.SignUpContainer>

             <Components.SignInContainer signinIn={signIn}>
                  <Components.Form>
                      <Components.Title>Sign in</Components.Title>
                      <Components.Input type='email' placeholder='Email' />
                      <Components.Input type='password' placeholder='Password' />
                      <Components.Button>
                           <Components.Anchor1 href="https://api.intra.42.fr/oauth/authorize?client_id=u-s4t2ud-9cee2e9030dd9a1da9e02120bb26ac7abf940260ed9ba7ae8a0c75381779704d&redirect_uri=http%3A%2F%2Flocalhost%3A4000%2Fauth%2F42%2Fcallback&response_type=code"> Log In with your Intra </Components.Anchor1>
                      </Components.Button>
                      <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                      <Components.Button>Sigin In</Components.Button>
                  </Components.Form>
             </Components.SignInContainer>

             <Components.OverlayContainer signinIn={signIn}>
                 <Components.Overlay signinIn={signIn}>

                 <Components.LeftOverlayPanel signinIn={signIn}>
                     <Components.Title>Welcome Back!</Components.Title>
                     <Components.Paragraph>
                         login with your personal info
                     </Components.Paragraph>
                     <Components.GhostButton onClick={() => toggle(true)}>
                         Sign In
                     </Components.GhostButton>
                     </Components.LeftOverlayPanel>

                     <Components.RightOverlayPanel signinIn={signIn}>
                       <Components.Title>Hello, Friend!</Components.Title>
                       <Components.Paragraph>
                           Enter Your personal details and start journey with us
                       </Components.Paragraph>
                           <Components.GhostButton onClick={() => toggle(false)}>
                               Sigin Up
                           </Components.GhostButton> 
                     </Components.RightOverlayPanel>
 
                 </Components.Overlay>
             </Components.OverlayContainer>

         </Components.Container>
     )
}

export default Login;