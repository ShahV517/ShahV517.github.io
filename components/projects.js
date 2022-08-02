const Projects = () => {
    return (
        <div id="projects" className="projects-body">
            <div className="container">
                <h1 className="projects">Projects</h1>
                <p className="projects-text">
                    Here are some of my projects:
                </p>
                <ul className="projects-list">
                    <li className="projects-item">
                        <a href="https://github.com/ShahV517/whats-on-your-mind" target="_blank" rel="noreferrer" className="projects-link">
                        Whats On Your Mind
                        </a>
                        <p className="projects-text-small">
                            A social media app that allows users to post and share their thoughts.
                        </p>
                    </li>
                    <li className="projects-item">
                        <a href="https://github.com/ShahV517/league-of-legends-champions" target="_blank" rel="noreferrer" className="projects-link">
                            League of Legends Champions
                            </a>
                        <p className="projects-text-small">
                            A web application that displays the champions of League of Legends.
                        </p>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Projects;