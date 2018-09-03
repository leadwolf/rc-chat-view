import PropTypes from 'prop-types';
import _ from 'lodash';

export const MESSAGE_CONTENT_TYPE_TEXT = 'text';
export const MESSAGE_CONTENT_TYPE_EMOJI = 'emoji';

export const messageType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    senderId: PropTypes.string.isRequired,
    username: PropTypes.string,
    avatarSrc: PropTypes.string,
    type: PropTypes.oneOf([MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI]).isRequired,
    text: (props, propName, componentName) => {
        if (props.type === MESSAGE_CONTENT_TYPE_EMOJI) {
            return null;
        }
        if (props.type === MESSAGE_CONTENT_TYPE_TEXT && !_.isString(props[propName])) {
            return new Error(
                `Invalid prop '${propName}' supplied to ${componentName}. Validation failed`
            );
        }
    },
    emoji: (props, propName, componentName) => {
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
    },
});

export const messageArrayType = PropTypes.arrayOf(messageType);
