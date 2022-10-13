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

    const reset = (newAuth: string) => {
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
                <p>This Typescript version of the Disqus Embed may produce an error message with the window.DISQUS object.  Fixing this issue is project-dependent, so for now it is not included in the Disqus-React package (as of v1.1.5).  Here are some options to fix this error message: <a href='https://stackoverflow.com/a/56458070' target='_blank'>https://stackoverflow.com/a/56458070</a></p>
        
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