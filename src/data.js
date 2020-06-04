import tvShuffleImg from './img/tv_shuffle_screencap.PNG';
import albumImg from './img/album_collage_screencap.PNG';
import fontsImg from './img/favorite_fonts_screencap.PNG';
import momentumImg from './img/momentum_clone_screencap.PNG';
import templateImg from './img/web_template_screencap.PNG';
import portfolioImg from './img/portfolio_screencap.PNG';

const projects = [
  {
    name: 'TV Shuffle',
    screencap: tvShuffleImg,
    summary: 'TV Shuffle selects random episodes of TV shows for users to watch. Users can select any TV show available in TMDb, optionally select a season to shuffle within, and click a shuffle button to randomly select an episode. This is a Progressive Web App and is deployed with AWS Amplify.',
    stack: ['React', 'HTML', 'Sass', 'Axios', 'React Testing Library', 'ESLint', 'stylelint'],
    live: 'https://www.tvshufflebutton.com',
    code: 'https://github.com/dlhrubin/tv-shuffle',
  },
  {
    name: 'Album Collage',
    screencap: albumImg,
    summary: 'Album Collage is a tool for generating collages of album covers. Users can select any artist and album available in the Last.fm database and drag-and-drop in the selection box to re-order album selections. Collage shapes are dynamically generated for each possible number of album covers. Collages can be edited, shuffled, reset, and deleted.',
    stack: ['React', 'HTML', 'Sass', 'Axios', 'React DnD', 'html2canvas', 'Enzyme', 'Jest', 'ESLint', 'stylelint'],
    live: 'https://www.albumcollage.com',
    code: 'https://github.com/dlhrubin/album-collage',
  },
  {
    name: 'Favorite Fonts',
    screencap: fontsImg,
    summary: 'Favorite Fonts is a fully responsive clone of Google Fonts built with React. Users can view 900+ fonts, search for specific fonts, display fonts with custom text, and change font size. Additional features: lazy-loading font cards, dark mode, grid/list layout toggle, reset, and sticky navigation bar.',
    stack: ['React', 'HTML', 'Sass', 'Axios', 'Enzyme', 'Jest', 'ESLint'],
    live: 'https://dlhrubin.github.io/favorite-fonts/',
    code: 'https://github.com/dlhrubin/favorite-fonts',
  },
  {
    name: 'Momentum Clone',
    screencap: momentumImg,
    summary: 'This vanilla JavaScript project replicates the front-end functionality of the Google Chrome extension Momentum. It includes a clock and timely greeting, the current weather given location, a customizable list of links, a Google search bar, a to do list, an inspirational quote, and a background image. The user can set a "main focus" for the day and customize their name.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://chingu-voyages.github.io/momentum-clone/',
    code: 'https://github.com/chingu-voyages/momentum-clone',
  },
  {
    name: 'Web Template Clone',
    screencap: templateImg,
    summary: 'This responsive template was created as a clone of the Conquer template on templatemo. It includes a basic template with headers and content cards, a parallax effect on header images, responsive design, and enhanced user experience with smooth transitions and scrolling using vanilla JavaScript.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://dlhrubin.github.io/web-template-clone/',
    code: 'https://github.com/dlhrubin/web-template-clone',
  },
  {
    name: 'Portfolio',
    screencap: portfolioImg,
    summary: 'My personal website and portfolio was built with React. It includes my basic information, contact links, and project links and descriptions on dynamically populated content cards.',
    stack: ['React', 'HTML', 'Sass', 'ESLint', 'stylelint'],
    live: 'https://dlhrubin.com',
    code: 'https://github.com/dlhrubin/portfolio',
  },
];

export default projects;
