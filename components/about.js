const About = () => {
    return (
        <div id="about" className="about-body">
            <div className="container">
                <h1 className="about">About Me</h1>
                <img src="/me2.jpeg" className="me" alt="me" />
                <p className="about-text">
                    I am a third year undergraduate student at Georgetown University. I am pursuing a major in Computer Science and minor in Physics and Mathematics. I am currently working as a research assistant for the <a href="https://infosense.cs.georgetown.edu/" target="_blank" rel="noreferrer">InfoSense </a> research group. Previously, I worked as a software engineer under the TAMID Group at Georgetown and provided full stack development services to start-up companies. In my free time, I like to play soccer, chess, and piano.
                </p>
            </div>
        </div>
    );
}

export default About;