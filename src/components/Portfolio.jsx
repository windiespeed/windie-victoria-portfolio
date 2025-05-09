export default function Portfolio() {
    const projects = [
        {
            title: "Project One",
            image: "https://via.placeholder.com/400x250?text=Project+One",
            description: "A brief description of Project One."
        },
        {
            title: "Project Two",
            image: "https://via.placeholder.com/400x250?text=Project+Two",
            description: "A brief description of Project Two."
        },
        {
            title: "Project Three",
            image: "https://via.placeholder.com/400x250?text=Project+Three",
            description: "A brief description of Project Three."
        }
    ];

    return (
        <section id="portfolio" className="portfolio">
            <h2>My Work</h2>
            <div className="portfolio-items">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-card">
                        <img src={project.image} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
