import { DiscussionEmbed } from 'disqus-react';

const Embed = () => {
    
    return (
        <div>
            <DiscussionEmbed
                shortname='ctang'
                config={
                    {
                        url: 'https://ctang-blog.tumblr.com/post/677026795984453632/a-fourth',
                        identifier: '9040425452',
                        title: 'test_blog_a_fourth',
                        language: '',
                    }
                }
                />
        </div>
    )
}

export default Embed;