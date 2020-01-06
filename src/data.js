import img1 from "./img/album_collage_screencap.PNG";
import img2 from "./img/momentum_clone_screencap.PNG";
import img3 from "./img/web_template_screencap.PNG";
import img4 from "./img/portfolio_screencap.PNG";

const projects = [
    {
        name: "Album Collage", 
        screencap: img1, 
        summary: "Album Collage is a tool for generating collages of album covers. Users can select any artist and album available in the Last.fm database and drag-and-drop in the selection box to re-order album selections. Collage shapes are dynamically generated for each possible number of album covers. Collages can be edited, shuffled, reset, and deleted.", 
        stack: "React, JavaScript, HTML, SCSS, Axios",
        live: "https://www.albumcollage.com",
        code: "https://github.com/dlhrubin/album-collage"                  
    },
    {
        name: "Momentum Clone", 
        screencap: img2, 
        summary: "This project replicates the front-end functionality of Momentum, a popular home screen extension for Google Chrome. It includes a clock and greeting based on time of day, the current weather given location, a customizable list of links, a Google search bar, a to do list, an inspirational quote, and a background image of nature. The user can set a \"main focus\" for the day and customize their name.",
        stack: "JavaScript, HTML, CSS",
        live: "https://chingu-voyages.github.io/v11-toucans-team-06/",
        code: "https://github.com/chingu-voyages/v11-toucans-team-06"
    }, 
    {
        name: "Web Template Clone", 
        screencap: img3, 
        summary: "This responsive template was created as a clone of the Conquer template on templatemo. It includes a basic template with headers and content cards, a parallax effect on header images, responsive design, and enhanced user experience with smooth transitions and scrolling using vanilla JavaScript.",
        stack: "JavaScript, HTML, CSS",
        live: "https://dlhrubin.github.io/web-template-clone/", 
        code: "https://github.com/dlhrubin/web-template-clone"
    },
    {
        name: "Portfolio", 
        screencap: img4,
        summary: "My personal website and portfolio was built with React. It includes my basic information, contact links, and project links and descriptions on dynamically populated content cards.",
        stack: "React, JavaScript, HTML, SCSS",
        live: "https://github.com/dlhrubin/portfolio",
        code: "https://github.com/dlhrubin/portfolio"
    }
]

export default projects;