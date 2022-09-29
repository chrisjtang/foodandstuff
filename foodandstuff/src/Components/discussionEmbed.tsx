import { DiscussionEmbed } from 'disqus-react';

interface Args {
    shortname: string,
    config: {
        url: string,
        identifier: string,
        title: string,
        language: string,
    }
}

interface Props {
    article: {
        url: string,
        id: string,
        title: string,
    }
}

const Embed = (args: Args, props: Props) => {
    return (
        <DiscussionEmbed
            shortname='ctang'
            config={
            {
                url: this.props.article.url,
                identifier: this.props.article.id,
                title: this.props.article.title,
                language: 'zh_TW' //e.g. for Traditional Chinese (Taiwan)	
            }
    }
/>
    )
}

export default Embed;
