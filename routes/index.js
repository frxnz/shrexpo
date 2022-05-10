const Home = require('routes/home/components/Home');
const Demo = require('routes/demo/containers/Demo');
const { withKeyboardAvoidingLayout } = require('components/KeyboardAvoidingLayout');
const { withAltKeyboardAvoidingLayout } = require('components/KeyboardAvoidingLayoutAlt');

module.exports = [
    {
        path: '/',
        component: Home,
        options: {
            title: 'Home'
        }
    },
    {
        path: '/demo',
        component: withKeyboardAvoidingLayout(Demo),
        options: {
            title: 'Demo'
        }
    }
];
