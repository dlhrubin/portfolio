import React, {Component} from "react";

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [{name: "Album Collage"},
                       {name: "Momentum Clone"}, 
                       {name: "Web Template"}]
        }
    }

    render() {
        let projectCards = this.state.projects.map((proj, i) => {
            return (
                <div key={i} className="card"></div>
            )
        })
        return(
            <section className="projects">
                {projectCards}
            </section>
        )
    }
}