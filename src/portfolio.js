import aboutpic from "./components/Access/WhatsApp Image 2023-06-01 at 21.54.42.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'Prasad',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Prasad Gore',
  role: 'A Frontend Developer',
  description:
    'Highly skilled frontend developer with expertise in creating visually appealing and user-friendly interfaces for websites and web applications. Proficient in HTML, CSS, and JavaScript, with experience in frameworks such as React. Strong collaborator with a keen eye for design and a commitment to delivering seamless user experiences.',
  resume: 'https://drive.google.com/drive/folders/12MP3uHk94Ew6_egSJqgxbvycI60gHfXA?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/prasad-gore-728a35261/',
    github: 'https://github.com/goregurupr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Movie Tracker',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: 'https://resource-planner-group2.herokuapp.com/',
   },
  // {
  //   name: 'GameStoreData(back end)',
  //   description:
  //     'GameStoreData is able to let user retrieve the game from database based on its year and category',
  //   stack: ['Java 8', 'MySQL', 'React'],
  //   sourceCode: 'https://github.com/stone-com/Resource-Planner',
    
  // },
  // {
  //   name: 'Music Store(back end)',
  //   description:
  //     'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
  //   stack: ['html-css-javascript', 'sequelize', 'React'],
  //   sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
  //   livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  // },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Express',
  'MySQL',
  'MongoDB',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'MERN',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hcc780921@gmail.com',
}

export { header, about, projects, skills, contact }
