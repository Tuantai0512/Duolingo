import { Metadata } from 'next';

const META_DATA_DEFAULT: Metadata = {
    applicationName: 'Duolingo Clone',
    authors: {
        name: 'Tuan Tai Pham',
        url: 'https://github.com/Tuantai0512',
    },
    creator: 'Tuan Tai Pham',
    description:
        'With our free mobile app or web and a few minutes a day, everyone can Duolingo. Learn 30+ languages online with bite-size lessons based on science.',
    keywords: [
        'english test',
        'english e-learning',
        'english for beginer',
        'Tuan Tai Pham',
    ],
    title: {
        default: `Duolingo - The world's best way to learn a language`,
        template: '%s | NextJS Boilerplate',
    },
    icons: {
        icon: '/icon.ico',
    },
};

export { META_DATA_DEFAULT };