import React from "react";
import axios from 'axios';


class Project extends React.Component {
    render() {
        const project = this.props.project;

        return(
            <div className="project-card">
                <p className="project-card-title"><b>{project.title}</b></p>
                <a className="project-card-example link" href={project.url}>{project.example}</a>
                <div className="project-card-description-text-holder">
                    <p className="project-card-description">{project.description}</p>
                </div>
            </div>
        );
    };
};


class ProjectCategoryRow extends React.Component {
    render() {
        const category = this.props.category;

        return(
            <h2 className="category-title text-center">{category}</h2>
        );
    };
};


class ProjectsTable extends React.Component {
    render() {
        return(
            <div>
                {this.props.projects.map((project) => (
                    <>
                        <ProjectCategoryRow category={project.category} />
                        <div className="projects-container">
                            {project.projects.map((element) => (
                                <Project project={element} />
                            ))}
                        </div>
                    </>
                ))}
            </div>
        );
    };
};


class Works extends React.Component {
    state = { data: [] }

    componentDidMount = () => {
        axios.get('http://127.0.0.1:8000/api/projects/')
            .then(response => {
                this.setState({ 'data': response.data });
                console.info(response.data)
            })
            .catch(error => {
                console.log(error);
                this.setState({ 'data': this.props.projects });  // Заглушка
            })
    }

    render() {
        const projects = this.state.data;

        return (
            <div>
                <h1 id='work' class='text-center'><b>Мои работы</b></h1>
                <ProjectsTable projects={projects} />
            </div>
        );
    };
};


export default Works;
