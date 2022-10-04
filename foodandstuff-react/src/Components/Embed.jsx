import React from 'react';
import { DiscussionEmbed } from 'disqus-react';

const Embed = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/login')
            .then(response => console.log('response data', response))
            .then(response => setLoginResponse(response));
    }

    return (
        <div>
            <div>
                <button
                    onClick={handleLogin}
                >
                    Login
                </button>
            </div>
            <DiscussionEmbed
                shortname='ssoglitch'
                config={
                    {
                        url: 'https://disqus-sso-demo.glitch.me/',
                        identifier: '1 https://disqus-sso-demo.glitch.me/',
                        title: 'Disqus SSO quick start',
                        remoteAuthS3: '',
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