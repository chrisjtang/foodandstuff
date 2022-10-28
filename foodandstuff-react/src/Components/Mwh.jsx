import { useCallback } from 'react'
import { DiscussionEmbed } from 'disqus-react'
import CryptoJS from 'crypto-js'

const Mwh = () => {
    const disqusSignon = useCallback(() => {
        const disqusData = {
            id: 'test id',
            username: 'test username',
            email: 'test email',
        }
        const disqusStr = JSON.stringify(disqusData)
        const timestamp = Math.round(+new Date() / 1000)
        const message = window.btoa(disqusStr)
        const result = CryptoJS.HmacSHA1(message + " " + timestamp, 'disqus secret');
        const hexsig = CryptoJS.enc.Hex.stringify(result);
        return {
            pubKey: 'disqus public key',
            auth: message + ' ' + hexsig + ' ' + timestamp,
        }
    }, [])

    const handleLogin = () => {
        const sso = disqusSignon()
        if (sso.auth) {
            window.DISQUS.reset({
                reload: true,
                config: function () {
                    this.page.remote_auth_s3 = sso.auth;
                },
            })
        }
    }

    

    return (
        <>
        <button
                onClick={handleLogin}
            >
                Login
            </button>
            <div className="wrapper">
                <DiscussionEmbed
                    shortname='ssoglitch'
                    config={{
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
                    }}
                />
            </div>
        </>
    )
}

export default Mwh;
