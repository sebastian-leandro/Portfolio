import {
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  logochi,
  logomuelles,
  logoempower,
  empoweraction,
  muelles,
  chihuahua,
  santiago,
  felipe,
  logoapple,
  victoria,
  javascript,
  python,
  next,
  react,
  javascriptBall
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
]

const services = [
  {
    title: 'Python',
    icon: python
  },
  {
    title: 'Javascript',
    icon: javascript
  },
  {
    title: 'React',
    icon: react
  },
  {
    title: 'Next Js',
    icon: next
  }
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html
  },
  {
    name: 'CSS 3',
    icon: css
  },
  {
    name: 'JavaScript',
    icon: javascriptBall
  },
  {
    name: 'React JS',
    icon: reactjs
  },
  {
    name: 'Redux Toolkit',
    icon: redux
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind
  },
  {
    name: 'Node JS',
    icon: nodejs
  }
]

const experiences = [
  {
    title: 'UX Designer',
    company_name: 'EmpowerAction',
    icon: logoempower,
    iconBg: '#001537',
    date: 'Sep 2023 - Present',
    points: [
      'Front-End and UX Design lead on this web 3.0 Project.',
      'I have meticulously designed the user experience from scratch.',
      'Implementing responsive design and ensuring cross-browser compatibility.',
      'In addition, I performed Back-End integrations with Node JS to ensure a seamless and cohesive user experience.'
    ]
  },
  {
    title: 'Web Developer',
    company_name: 'Muelles & Marinas Design',
    icon: logomuelles,
    iconBg: '#383E56',
    date: 'Dec 2022 - Jun 2023',
    points: [
      'Web development with HTML, CSS, JavaScript.',
      'Creation and management of digital brand content.',
      'Automation of workflows with Hubspot and Zapier. Budget platform integration.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.'
    ]
  },
  {
    title: 'Social Media Creator',
    company_name: 'iPhoneFix',
    icon: logoapple,
    iconBg: '#ffffff',
    date: 'Jul 2021 - Oct 2022',
    points: [
      'Creation of content in social networks.',
      'Provided top-tier customer service by actively listening to client concerns and performing quick, accurate, and high-quality iPhone repairs. ',
      'Implemented an automated ticketing and repair tracking system that streamlined the diagnostic and repair process, reducing turnaround time by 25%.',
      'Managed an organized and efficient parts inventory, ensuring that critical components were always in stock.'
    ]
  },
  {
    title: 'Designer',
    company_name: 'Chihuahua',
    icon: logochi,
    iconBg: '#fad207',
    date: 'Apr 2020 - May 2021',
    points: [
      'Creation and selection of content in social networks.',
      'Constant updating of offers and catalogs in Rappi and Order Now.',
      'Generation of organic traffic throught multiple effective actions.',
      'Optimization of google ads campaings with offers and special days with excellent results.'
    ]
  }
]

const testimonials = [
  {
    testimonial:
      "In the time I've worked with Sebastian, I've seen his face challenges head-on while maintaining a level of professionalism that is truly inspiring.",
    name: 'Santiago',
    designation: 'Data and Social Science Researcher',
    company: 'Adava',
    image: santiago,
    link: 'https://www.linkedin.com/in/santiagocanepa/'
  },
  {
    testimonial:
      'Working alongside Sebastian has been a great experience. The level of dedication and expertise brought to every project sets a new standard.',
    name: 'Felipe Maldonado',
    designation: 'Machine Learning Enginering',
    company: 'Free Will AI',
    image: felipe,
    link: 'https://felipeinti.github.io/minimalist/'
  },
  {
    testimonial:
      'In an industry where adaptability is crucial, Sebastian has shown a unique ability to pivot strategies while maintaining a strong focus on the end goal.',
    name: 'Victoria Quiroga',
    designation: 'Advanced student of psychology',
    company: 'EmpowerAction',
    image: victoria,
    link: 'https://www.linkedin.com/in/victoriaquirogal%C3%B3pez/'
  }
]

const projects = [
  {
    name: 'Chihuahua',
    description:
      'Chihuahua Tex-Mex is the go-to destination in Buenos Aires for authentic Tex-Mex cuisine, exclusively available for delivery and take-away. Customers can easily place their orders for a true Tex-Mex culinary experience.',
    tags: [
      {
        name: 'Social Media',
        color: 'blue-text-gradient'
      },
      {
        name: 'googleads',
        color: 'white-text-gradient'
      },
      {
        name: 'service',
        color: 'pink-text-gradient'
      }
    ],
    image: chihuahua,
    source_code_link: 'https://www.instagram.com/chihuahua.ar/'
  },
  {
    name: 'Muelles & Marinas',
    description:
      'This Website offers customized exterior design solutions, while also prioritizing environmental responsibility through sustainable engineering, waste reduction, and recycling initiatives.',
    tags: [
      {
        name: 'HTML',
        color: 'orange-text-gradient'
      },
      {
        name: 'CSS',
        color: 'blue-text-gradient'
      },
      {
        name: 'JavaScript',
        color: 'yellow-text-gradient'
      }
    ],
    image: muelles,
    source_code_link: 'https://muellesyestacados.com'
  },
  {
    name: 'EmpowerAction',
    description:
      'A web 3.0 that aims to be a bridge between decentralized finance and the real economy. Connecting skills transparently and free of intermediation, non-profit that seeks exchange between local economies .',
    tags: [
      {
        name: 'CSS',
        color: 'blue-text-gradient'
      },
      {
        name: 'JavaScript',
        color: 'yellow-text-gradient'
      },
      {
        name: 'Node JS',
        color: 'green-text-gradient'
      }
    ],
    image: empoweraction,
    source_code_link: 'https://empoweraction.network'
  }
]

export { services, technologies, experiences, testimonials, projects }
