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
        id: 17,
        title: 'Da Spot',
        description: 'Da Spot is a full-stack CRUD web application which allows users to login, register, and post spots they have visited with ratings to help people efficiently plan their upcoming trips. This muti-page app includes error handling middleware alongside authentication for safe password storing using passport. Utilized Nodejs, Mongodb, Express, Bootstrap, MapBox API, and other npm modules. Try it out or view the source code below.',
        url: 'https://daspot.herokuapp.com/',
        github_url: 'https://github.com/quddusyo/DaSpot',
        skills: [ 
            { 
                id: 21,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 22,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 23,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 24,
                name: mongoIcon,
                desc: "MongoDB"
            },
            { 
                id: 25,
                name: bootstrapIcon,
                desc: "Bootstrap"
            },
            { 
                id: 26,
                name: nodeIcon,
                desc: "NodeJs"
            },
            { 
                id: 27,
                name: expressIcon,
                desc: "ExpressJs"
            },
            { 
                id: 28,
                name: postmanIcon,
                desc: "Postman API"
            }
        ],
        image: project1
    },
    {
        id: 18,
        title: 'AP Pixels NFT',
        description: 'Created with Reactjs, utilized Metamask.io to connect to Rinkeby test net and recieve test ETH for nft gas fees. Posted self-created AP Pixels NFT on thirdweb and used data to fetch and use on app. Implemented a search bar where you can search the NFT by name and a dark theme button to choose light or dark theme for preference.',
        github_url: 'https://github.com/quddusyo/ap-pixels-nft/tree/version-jan-10',
        skills: [
            { 
                id: 29,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 30,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 31,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 32,
                name: reactIcon,
                desc: "React"
            }
        ],
        image: project2
    },
    {
        id: 19,
        title: 'Sorting Visualizer',
        description: 'Created with Reactjs, utilized react hooks to render XML components on to the webpage. This application visualizes a variety of sorting algorithms at work. Implemented a new array button where the user can generate a new array with random values to see another sorting algorithm at work. Give it a try.',
        github_url: 'https://github.com/quddusyo/Sorting-Visualizer/tree/algorithmImplementation',
        skills: [
            { 
                id: 33,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 34,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 35,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 36,
                name: reactIcon,
                desc: "ReactJs"
            }
        ],
        image: project3
    },
    {
        id: 20,
        title: 'FenceIt',
        description: 'FenceIt is a renovation company (self created) template which offers a wide variety of renovation services. This multi-page website was created to show customers an example template for potential websites. This website utilizes many modern css properties to give it a modern design and hosted on google firebase.',
        url: 'https://fenceit-2ab0b.web.app/',
        skills: [
            { 
                id: 37,
                name: htmlIcon,
                desc: "HTMLS5"
            },
            { 
                id: 38,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 39,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 40,
                name: reactIcon,
                desc: "ReactJs"
            },
            { 
                id: 41,
                name: responsiveIcon,
                desc: "Responsive"
            }
        ],
        image: project4
    }
]