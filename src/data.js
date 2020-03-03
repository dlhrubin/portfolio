import img1 from './img/favorite_fonts_screencap.PNG';
import img2 from './img/album_collage_screencap.PNG';
import img3 from './img/momentum_clone_screencap.PNG';
import img4 from './img/web_template_screencap.PNG';
import img5 from './img/portfolio_screencap.PNG';

const projects = [
  {
    name: 'Favorite Fonts',
    screencap: img1,
    summary: 'Favorite Fonts is a fully responsive clone of Google Fonts built with React. Users can view 900+ fonts, search for specific fonts, display fonts with custom text, and change font size. Additional features: lazy-loading font cards, dark mode, grid/list layout toggle, reset, and sticky navigation bar.',
    stack: ['React', 'JavaScript', 'HTML', 'Sass', 'Axios', 'Enzyme', 'Jest', 'ESLint'],
    live: 'https://dlhrubin.github.io/favorite-fonts/',
    code: 'https://github.com/dlhrubin/favorite-fonts',
  },
  {
    name: 'Album Collage',
    screencap: img2,
    summary: 'Album Collage is a tool for generating collages of album covers. Users can select any artist and album available in the Last.fm database and drag-and-drop in the selection box to re-order album selections. Collage shapes are dynamically generated for each possible number of album covers. Collages can be edited, shuffled, reset, and deleted.',
    stack: ['React', 'JavaScript', 'HTML', 'Sass', 'Axios', 'ESLint', 'stylelint'],
    live: 'https://www.albumcollage.com',
    code: 'https://github.com/dlhrubin/album-collage',
  },
  {
    name: 'Momentum Clone',
    screencap: img3,
    summary: 'This vanilla JavaScript project replicates the front-end functionality of the Google Chrome extension Momentum. It includes a clock and timely greeting, the current weather given location, a customizable list of links, a Google search bar, a to do list, an inspirational quote, and a background image. The user can set a "main focus" for the day and customize their name.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://chingu-voyages.github.io/momentum-clone/',
    code: 'https://github.com/chingu-voyages/momentum-clone',
  },
  {
    name: 'Web Template Clone',
    screencap: img4,
    summary: 'This responsive template was created as a clone of the Conquer template on templatemo. It includes a basic template with headers and content cards, a parallax effect on header images, responsive design, and enhanced user experience with smooth transitions and scrolling using vanilla JavaScript.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://dlhrubin.github.io/web-template-clone/',
    code: 'https://github.com/dlhrubin/web-template-clone',
  },
  {
    name: 'Portfolio',
    screencap: img5,
    summary: 'My personal website and portfolio was built with React. It includes my basic information, contact links, and project links and descriptions on dynamically populated content cards.',
    stack: ['React', 'JavaScript', 'HTML', 'Sass', 'ESLint', 'stylelint'],
    live: 'https://dlhrubin.com',
    code: 'https://github.com/dlhrubin/portfolio',
  },
];

export default projects;
