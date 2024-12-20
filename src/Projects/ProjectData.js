
import project1 from '../assets/Projects/phishingdetector.png';
import project2 from '../assets/Projects/da-spot.png';
import project3 from '../assets/Projects/albertaducts.png';
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
import pythonIcon from '../assets/Skills/python.png';
import virtualboxIcon from '../assets/Skills/virtualbox.png';
import linuxIcon from '../assets/Skills/linux.png';
import windowsIcon from '../assets/Skills/windows.png';
import wiresharkIcon from '../assets/Skills/wireshark.png';

export const ProjectData = [
    {
        id: 1,
        title: 'Cybersecurity Phishing Detector Script',
        description: 'DetectPhishing.py is a Python script designed to analyze URLs for phishing activity. It integrates with the VirusTotal API to perform URL scans, fetch WHOIS information, and log the results. Additionally, it utilizes VirtualBox for sandboxed URL execution, allowing for dynamic analysis using user-specified tools. Logs are generated to ensure transparency and integrity. ',
        github_url: 'https://github.com/quddusyo/Cybersecurity-Tools-for-Automation/tree/main/PhishingLinkDetector',
        skills: [ 
            { 
                id: 6,
                name: pythonIcon,
                desc: "Python"
            },
            { 
                id: 7,
                name: virtualboxIcon,
                desc: "VirtualBox / Virtual Machine"
            },
            { 
                id: 8,
                name: linuxIcon,
                desc: "Linux"
            },
            { 
                id: 9,
                name: windowsIcon,
                desc: "Windows"
            },
            { 
                id: 10,
                name: wiresharkIcon,
                desc: "Wireshark"
            }
        ],
        image: project1
    },
    {
        id: 2,
        title: 'Full-Stack CRUD Web App',
        description: 'With user registration, login capabilities, and full CRUD operations for spot locations, "DaSpot" empowers users to effortlessly explore and maintain their favorite places. Leveraging HTML, CSS, and Bootstrap for the front-end and Javascript, Node.js and Express.js for the back-end, "DaSpot" ensures a smooth and efficient user experience. User authentication is implemented using Passport.js, a trusted authentication middleware in the Node.js ecosystem alongside other libraries. The application integrates with MongoDB for efficient data storage and retrieval. Notably, "DaSpot" utilizes Mapbox, a powerful mapping platform, enabling users to visualize and interact with spot locations on interactive maps. ',
        url: 'https://daspot.herokuapp.com/',
        github_url: 'https://github.com/quddusyo/DaSpot',
        skills: [ 
            { 
                id: 11,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 12,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 13,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 14,
                name: mongoIcon,
                desc: "MongoDB"
            },
            { 
                id: 15,
                name: bootstrapIcon,
                desc: "Bootstrap"
            },
            { 
                id: 16,
                name: nodeIcon,
                desc: "NodeJs"
            },
            { 
                id: 17,
                name: expressIcon,
                desc: "ExpressJs"
            },
            { 
                id: 18,
                name: postmanIcon,
                desc: "Postman API"
            }
        ],
        image: project2
    },
    {
        id: 3,
        title: 'AlbertaDucts Website',
        description: 'Built with ReactJS allowing a seamless user experience, visitors can easily navigate through the website to learn about the companies expertise in duct cleaning and the benefits it brings to indoor air quality. Implemented backend API for form submission, powered by emailjs, ensuring customers can easily reach out to the company for inquiries and appointments. Integrated react-spinners to add subtle loading micro-animations, enhancing the visual appeal of the site. Additionally, utilized react-toastify, enhancing the form submission process by providing a user-friendly and intuitive UI alongside stripe payment processing API to collect service funds.',
        url: 'https://albertaducts.web.app/',
        skills: [
            { 
                id: 19,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 20,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 21,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 22,
                name: reactIcon,
                desc: "React"
            },
            {
                id: 23,
                name: responsiveIcon,
                desc: "Responsive"
            }
        ],
        image: project3
    },
    {
        id: 4,
        title: 'Sorting Visualizer',
        description: 'Through the utilization of React.js and hooks, this project provides an interactive and visually engaging platform to observe the workings of various sorting algorithms by rendering XML components and allowing users to generate new arrays for dynamic algorithm comparisons. The source code for this project is available on GitHub.',
        github_url: 'https://github.com/quddusyo/Sorting-Visualizer/tree/algorithmImplementation',
        skills: [
            { 
                id: 24,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 25,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 26,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 27,
                name: reactIcon,
                desc: "ReactJs"
            }
        ],
        image: project4
    },
    {
        id: 5,
        title: 'ColdCityWrap Vehicle Upholestry',
        description: 'Website built using React.js. This Unique design features a captivating snowing effect implemented using tsparticle library. Hosted on Google Firebase and accessible through a custom domain from GoDaddy, this responsive multi-page website ensures a seamless browsing experience. Includes carousel highlight section, showcasing stunning images of vehicles expertly wrapped in the past. Website increased customers, generating increased revenue, ultimately building a online pressence and long term vision and safety for the company.',
        url: 'https://coldcitywraps.com',
        skills: [
            { 
                id: 28,
                name: htmlIcon,
                desc: "HTML5"
            },
            { 
                id: 29,
                name: cssIcon,
                desc: "CSS3"
            },
            { 
                id: 30,
                name: jsIcon,
                desc: "JavaScript"
            },
            { 
                id: 31,
                name: reactIcon,
                desc: "ReactJs"
            },
            { 
                id: 32,
                name: responsiveIcon,
                desc: "Responsive"
            }
        ],
        image: project5
    },
]