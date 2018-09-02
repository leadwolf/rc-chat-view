import PropTypes from 'prop-types';

export const MESSAGE_CONTENT_TYPE_TEXT = 'text';
export const MESSAGE_CONTENT_TYPE_EMOJI = 'emoji';

export const messageType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    ownerId: PropTypes.string.isRequired,
    username: PropTypes.string,
    avatarSrc: PropTypes.string,
    type: PropTypes.oneOf([MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI]).isRequired,
    text: PropTypes.string,
    emoji: PropTypes.object,
});

export const messageArrayType = PropTypes.arrayOf(messageType);
