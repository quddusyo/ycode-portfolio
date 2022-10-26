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
import postmanIcon from '../assets/Skills/postman.png';


export const ProjectData = [
    {
        id: 0,
        title: 'Da Spot',
        description: 'Da Spot is a full-stack CRUD web application which allows users to login and post spots they have visited with the spots information to plan their trips with ease. Implemented Error Handling and Utilized Nodejs, Mongodb, Express, Bootstrap, MapBox API, and npm modules. This website includes multiple routes, some are log-in/register pages with safe password storing. Try it out or view the source code below.',
        url: 'https://daspot.herokuapp.com/',
        github_url: 'https://github.com/quddusyo/DaSpot',
        skills: [htmlIcon, cssIcon, jsIcon, mongoIcon, bootstrapIcon, nodeIcon, expressIcon, postmanIcon],
        image: project1
    },
    {
        id: 1,
        title: 'AP Pixels NFT',
        description: 'Created with Reactjs, utilized Metamask.io to connect to Rinkeby test net and recieve test ETH for nft gas fees. Posted self-created AP Pixels NFT on thirdweb and used data to fetch and use on app. Implemented a search bar where you can search the NFT by name and a dark theme button to choose light or dark theme for preference.',
        github_url: 'https://github.com/quddusyo/ap-pixels-nft/tree/version-jan-10',
        skills: [htmlIcon, cssIcon, jsIcon, reactIcon],
        image: project2
    },
    {
        id: 2,
        title: 'Sorting Visualizer',
        description: 'Created with Reactjs, utilized react hooks to render XML components on to the webpage. This application visualizes a variety of sorting algorithms at work. Implemented a new array button where the user can generate a new array with random values to see another sorting algorithm at work. Try it out today.',
        github_url: 'https://github.com/quddusyo/Sorting-Visualizer/tree/algorithmImplementation',
        skills: [htmlIcon, cssIcon, jsIcon, reactIcon],
        image: project3
    },
    {
        id: 3,
        title: 'FenceIt',
        description: 'FenceIt is a renovation company (self created) template which offers a wide variety of renovation services. This website was created to show customers an example template for websites. This website utilizes many modern css properties to give it a modern design.',
        url: 'https://fenceit-2ab0b.web.app/',
        skills: [htmlIcon, cssIcon, jsIcon, reactIcon, responsiveIcon],
        image: project4
    }
]