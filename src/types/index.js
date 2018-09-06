import PropTypes from 'prop-types';

const momentPropTypes = require('react-moment-proptypes');

export const MESSAGE_CONTENT_TYPE_TEXT = 'text';
export const MESSAGE_CONTENT_TYPE_EMOJI = 'emoji';

const avatarType = PropTypes.shape({
    email: PropTypes.string,
    md5Email: PropTypes.string,
    facebookId: PropTypes.string,
    twitterHandle: PropTypes.string,
    instagramId: PropTypes.string,
    googleId: PropTypes.string,
    skypeId: PropTypes.string,
    name: PropTypes.string,
    maxInitials: PropTypes.string,
    value: PropTypes.string,
    color: PropTypes.string,
    fgColor: PropTypes.string,
    src: PropTypes.string,
});

export const messageContentTextValidator = (props, propName, componentName) => {
    if (props.type === MESSAGE_CONTENT_TYPE_EMOJI) {
        return null;
    }
    if (props.type === MESSAGE_CONTENT_TYPE_TEXT && typeof props[propName] !== 'string') {
        return new Error(
            `Invalid prop '${propName}' supplied to ${componentName}. Validation failed`
        );
    }
};

export const messageContentEmojiValidator = (props, propName, componentName) => {
    if (props.type === MESSAGE_CONTENT_TYPE_TEXT) {
        return null;
    }
    if (
        props.type === MESSAGE_CONTENT_TYPE_EMOJI &&
        !_.isObject(props[propName]) &&
        !_.isString(props[propName])
    ) {
        return new Error(
            `Invalid prop '${propName}' supplied to ${componentName}. Validation failed`
        );
    }
};

export const messageType = PropTypes.shape({
    id: PropTypes.string.isRequired, // for the react array key
    senderId: PropTypes.string.isRequired, // used to determine whether the message was sent or received
    username: PropTypes.string, // the username that will be displayed, if necessary
    avatar: avatarType, // the props to pass to `react-avatar`, the avatar that will be displayed, if necessary
    type: PropTypes.oneOf([MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI]).isRequired, // the type of the message, determines which property will be used (text/emoji)
    text: messageContentTextValidator, // the plain text to display. Markdown will be parsed automatically
    emoji: messageContentEmojiValidator, // the emoji objet or string id, as per `emoji-mart`
    date: PropTypes.oneOfType([momentPropTypes.momentString, momentPropTypes.momentObj]), // the date that will be displayed, if necessary
});

export const messageArrayType = PropTypes.arrayOf(messageType);
