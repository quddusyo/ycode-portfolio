import project1 from '../assets/Projects/da-spot.png';
import project2 from '../assets/Projects/albertaducts.png';
import project3 from '../assets/Projects/ysf-contractors.png';
import project4 from '../assets/Projects/sorting-visualizer.png';
import project5 from '../assets/Projects/coldcitywraps.png';
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
        description: 'Da Spot is a full-stack CRUD web application which allows users to login, register, and post spots they have visited with ratings to help people efficiently plan their upcoming trips. This muti-page app includes error handling middleware alongside authentication for safe password storing using passport. Utilized Nodejs, Mongodb, Express, Bootstrap, MapBox API, and other libraries. Try it out or view the source code below.',
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
        title: 'AlbertaDucts Website',
        description: 'Created website for AlbertaDucts, a local duct cleaning company based in Calgary, ALberta. Created using Reactjs, utilized emailjs for quick form submission, react-spinners for loading micro-animation, react-toastify for form submission UI.',
        url: 'https://albertaducts.web.app/',
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
            },
            {
                id: 33,
                name: responsiveIcon,
                desc: "Responsive"
            }
        ],
        image: project2
    },
    {
        id: 19,
        title: 'YSF Contractors',
        description: 'Created website for media marketing agency, and a local contracting company based in Calgary, ALberta. Created using Reactjs, utilized emailjs for quick form submission, react-spinners for loading micro-animation, react-toastify for form submission UI.',
        url: 'https://ysf-contractors.web.app/',
        skills: [
            { 
                id: 34,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 35,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 36,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 37,
                name: reactIcon,
                desc: "React"
            },
            {
                id: 38,
                name: responsiveIcon,
                desc: "Responsive"
            }
        ],
        image: project3
    },
    {
        id: 20,
        title: 'Sorting Visualizer',
        description: 'Created with Reactjs, utilized react hooks to render XML components on to the webpage. This application visualizes a variety of sorting algorithms at work. Implemented a new array button where the user can generate a new array with random values to see another sorting algorithm at work. Give it a try.',
        github_url: 'https://github.com/quddusyo/Sorting-Visualizer/tree/algorithmImplementation',
        skills: [
            { 
                id: 39,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 40,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 41,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 42,
                name: reactIcon,
                desc: "ReactJs"
            }
        ],
        image: project4
    },
    {
        id: 43,
        title: 'ColdCityWraps',
        description: 'Local vehicle upholestry service website for first client in Calgary Alberta. Created with Reactjs, implemented snowing affect utilizing tsparticle library and hosted on Google Firebase using a custom domain. Implemented a carousel highlight section showing vehicle images the comapany that has been wrapped in the past. ',
        url: 'https://coldcitywraps.com',
        skills: [
            { 
                id: 44,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 45,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 46,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 47,
                name: reactIcon,
                desc: "ReactJs"
            },
            { 
                id: 48,
                name: responsiveIcon,
                desc: "Responsive"
            }
        ],
        image: project5
    },
]