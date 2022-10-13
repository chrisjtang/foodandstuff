import React, { useState } from 'react';
import { DiscussionEmbed } from 'disqus-react';
import axios from 'axios';

const Embed = () => {
    const [loggedIn, setLoggedInStatus] = useState(false);
    const [loginPayload, setLoginPayload] = useState('');
    const [loginPublicKey, setLoginPublicKey] = useState('');
    const [loginTestField, setLoginTestField] = useState('');

    const handleLogin = async () => {
        axios('http://localhost:3000/login')
            .then(response => response.data.payload)
            .then(payload => {
                setLoginPayload(`Payload: ${payload.auth}`);
                setLoginPublicKey(`Public Key: ${payload.pubKey}`);
                setLoginTestField(`Test Field: ${payload.test}`);
                setLoggedInStatus(true);
                reset(payload.auth);
            })
            .catch(err => console.error(err))
    }

    const handleLogout = () => {
        reset('e30= c1ad77866d19a308f133d18bb12a3e1f5d536a3b 1495142696');
        setLoggedInStatus(false);
    }

    const reset = (newAuth) => {
        window.DISQUS.reset({
            reload: true,
            config: function () {
                this.page.remote_auth_s3 = newAuth;
            }
        });
    };

    return (
        <div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.</p>
        
        <div id='login-logout-buttons'>
            <button
                onClick={handleLogout}
            >
                Log out user with empty SSO auth
            </button>
            <button
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
        <div>
            {loggedIn ? <div id='login-payload'>
                <div>
                {loginPayload}
            </div>
            <div>
                {loginPublicKey}
            </div>
            <div>
                {loginTestField}
            </div> 
            </div> : null}
            
        </div>
        </div>
            <DiscussionEmbed
                shortname='ssoglitch'
                config={
                    {
                        url: 'https://disqus-sso-demo.glitch.me/',
                        identifier: '1 https://disqus-sso-demo.glitch.me/',
                        title: 'Disqus SSO quick start',
                        apiKey: 'IrsWOMVmYfDfTq7IJ5fXMA2Ix99nB30EF7cP77SDgIrGyoQna1wXwU42wx17xRjN',
                        sso: {
                            name:   "SampleNews",
                            button:  "http://example.com/images/samplenews.gif",
                            icon:     "http://example.com/favicon.png",
                            url:        "http://example.com/login/",
                            logout:  "http://example.com/logout/",
                            profile_url: "http://example.com/profileUrlTemplate/{username}",
                            width:   "800",
                            height:  "400"
                        },
                    }
                }
                />
        </div>
    )
}

export default Embed;