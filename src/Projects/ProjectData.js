import project1 from '../assets/Projects/da-spot.png';
import project2 from '../assets/Projects/ap-pixel-nft.png';
import project3 from '../assets/Projects/sorting-visualizer.png';
import project4 from '../assets/Projects/fenceit.png';
import htmlIcon from '../assets/Skills/html5.png';
import cssIcon from '../assets/Skills/css3.png';
import jsIcon from '../assets/Skills/js.png';
import nodeIcon from '../assets/Skills/nodejs.png';
import expressIcon from '../assets/Skills/express.png';
import mongoIcon from '../assets/Skills/mongodb.png';
import bootstrapIcon from '../assets/Skills/bootstrap.png';
import responsiveIcon from '../assets/Skills/responsive.png';
import reactIcon from '../assets/Skills/reactjs.png';


export const ProjectData = [
    {
        id: 0,
        title: 'Da Spot',
        description: 'Da Spot is a full-stack CRUD web application which allows users to login and post spots they have visited with the spots information to plan their trips with ease. Utilized Nodejs, Mongodb, Express, Bootstrap, MapBox API and npm modules. Implemented user register and login pages with authentication and authorization to insure safe password storage alongside plenty of validation middleware to insure correct form submissions.',
        url: 'https://daspot.herokuapp.com/',
        skills: [htmlIcon, cssIcon, jsIcon, mongoIcon, bootstrapIcon, nodeIcon, expressIcon, responsiveIcon],
        image: project1
    },
    {
        id: 1,
        title: 'AP Pixels NFT',
        description: 'Created with Reactjs, utilized Metamask.io to connect to Rinkeby test net and recieve test ETH for nft gas fees. Posted self-created AP Pixels NFT on thirdweb and used data to fetch and use on app. Implemented a search bar where you can search the NFT by name and a dark theme button to choose light or dark theme for preference.',
        url: 'https://github.com/quddusyo/ap-pixels-nft',
        skills: [htmlIcon, cssIcon, jsIcon, reactIcon],
        image: project2
    },
    {
        id: 2,
        title: 'Sorting Visualizer',
        description: 'Created with Reactjs, utilized react hooks alongside state management to render XML components to show a variety of sorting algorithms.',
        url: 'https://github.com/quddusyo/Sorting-Visualizer',
        skills: [htmlIcon, cssIcon, jsIcon, reactIcon],
        image: project3
    },
    {
        id: 3,
        title: 'FenceIt',
        description: 'FenceIt is a renovation company template which offers a wide variety of renovation services. This website was created to show potential customers a template for websites. This website utilizes many modern css properties to give it a modern UI/UX design.',
        url: 'https://fenceit-2ab0b.web.app/',
        skills: [htmlIcon, cssIcon, jsIcon, reactIcon, responsiveIcon],
        image: project4
    }
]