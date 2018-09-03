import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Emoji as EmojiMartEmoji } from 'emoji-mart';

const MarkdownIt = require('markdown-it');
const emoji = require('markdown-it-emoji');

const md = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    breaks: true,
});
md.use(emoji);
md.renderer.rules.emoji = (tokens, idx) =>
    ReactDOMServer.renderToString(<EmojiMartEmoji emoji={tokens[idx].markup} size={25} />);

const TextMessage = ({ text }) => {
    const renderMarkdown = () => ({
        __html: md.render(text),
    });

    return <div className="sc-message--text" dangerouslySetInnerHTML={renderMarkdown()} />;
};

export default TextMessage;
