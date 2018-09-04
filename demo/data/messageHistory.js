import moment from 'moment';

import { MESSAGE_CONTENT_TYPE_TEXT, MESSAGE_CONTENT_TYPE_EMOJI } from '../../src/types';

const base = [
    {
        id: 'dummy_message_01',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: "Why don't they have salsa on the table?",
    },
    {
        id: 'dummy_message_02',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',
        text: 'What do you need salsa for?',
    },
    {
        id: 'dummy_message_03',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: 'Salsa is now the number one condiment in America.',
    },
    {
        id: 'dummy_message_04',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',

        text:
            "You know why? Because people like to say 'salsa.' 'Excuse me, do you have salsa?' 'We need more salsa.' 'Where is the salsa? No salsa?'",
    },
    {
        id: 'dummy_message_05',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',

        text:
            "You know it must be impossible for a Spanish person to order seltzer and not get salsa. 'I wanted seltzer, not salsa.'",
    },
    {
        id: 'dummy_message_06',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',

        text:
            "Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!",
    },
    {
        id: 'dummy_message_07',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: 'See, this should be a show. This is the show. ',
    },
    {
        id: 'dummy_message_08',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',
        text: 'What?',
    },
    {
        id: 'dummy_message_09',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: 'This. Just talking.',
    },
    {
        id: 'dummy_message_10',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',
        text: 'Yeah, right.',
    },
    {
        id: 'dummy_message_11',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: "I'm really serious. I think that's a good idea.",
    },
    {
        id: 'dummy_message_12',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',
        text: "Just talking? Well what's the show about?",
    },
    {
        id: 'dummy_message_13',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: "It's about nothing.",
    },
    {
        id: 'dummy_message_14',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',
        text: 'No story?',
    },
    {
        id: 'dummy_message_15',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        text: 'No forget the story. ',
    },
    {
        id: 'dummy_message_16',
        type: MESSAGE_CONTENT_TYPE_TEXT,
        senderId: 'dummy_sender_2',
        avatar: { name: 'chris' },
        username: 'chris',
        text: "You've got to have a story.",
    },
    {
        id: 'dummy_message_17',
        type: MESSAGE_CONTENT_TYPE_EMOJI,
        senderId: 'dummy_sender_1',
        avatar: { name: 'sam' },
        username: 'sam',
        emoji: ':yum:',
    },
];

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const baseMoment = moment();
baseMoment.subtract(3 * base.length, 'seconds');

let prevDate = baseMoment;

const history = base.map(message => {
    const date = moment(prevDate);
    date.add(getRandomArbitrary(2, 3), 'seconds');
    prevDate = date;
    return {
        ...message,
        date,
    };
});

export default history;
