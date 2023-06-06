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
        title: 'Full-Stack CRUD Web App',
        description: 'With user registration, login capabilities, and full CRUD operations for spot locations, "DaSpot" empowers users to effortlessly explore and maintain their favorite places. Leveraging HTML, CSS, and Bootstrap for the front-end and Javascript, Node.js and Express.js for the back-end, "DaSpot" ensures a smooth and efficient user experience. User authentication is implemented using Passport.js, a trusted authentication middleware in the Node.js ecosystem alongside other libraries. The application integrates with MongoDB for efficient data storage and retrieval. Notably, "DaSpot" utilizes Mapbox, a powerful mapping platform, enabling users to visualize and interact with spot locations on interactive maps. ',
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
        description: 'Built with ReactJS allowing a seamless user experience, visitors can easily navigate through the website to learn about the companies expertise in duct cleaning and the benefits it brings to indoor air quality. Implemented backend API for form submission, powered by emailjs, ensuring customers can easily reach out to the company for inquiries and appointments. Integrated react-spinners to add subtle loading micro-animations, enhancing the visual appeal of the site. Additionally, utilized react-toastify, enhancing the form submission process by providing a user-friendly and intuitive UI alongside stripe payment processing API to collect service funds.',
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
        title: 'YSF Contractors Company',
        description: 'Built using React.js and hosted using Firebase utilizing custom domain from GoDaddy. The websites feature a modern and interactive design, implemented various tools and libraries to enhance functionality and user experience. For efficient form submission, integrated emailjs, allowing quick and seamless communication. Utilized react-spinners to incorporate loading micro-animations and react-toastify to provide a user-friendly interface for form submissions. Websites highlights proficiency in React.js development and ability to create visually appealing and user-friendly digital experiences.',
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
        description: 'Through the utilization of React.js and hooks, this project provides an interactive and visually engaging platform to observe the workings of various sorting algorithms by rendering XML components and allowing users to generate new arrays for dynamic algorithm comparisons. The source code for this project is available on GitHub.',
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
        title: 'ColdCityWrap Vehicle Upholestry',
        description: 'Website built using React.js. This Unique design features a captivating snowing effect implemented using tsparticle library. Hosted on Google Firebase and accessible through a custom domain from GoDaddy, this responsive multi-page website ensures a seamless browsing experience. Includes carousel highlight section, showcasing stunning images of vehicles expertly wrapped in the past. Website increased customers, generating increased revenue, ultimately building a online pressence and long term vision and safety for the company.',
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