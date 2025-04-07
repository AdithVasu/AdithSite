export default function ProjectCard({title, year, tech, description, gitLink}) {
    return (
        <div style={{backgroundColor: '#a0c4ff', borderRadius: 5, maxWidth: 250}}>
            <h1>{title} {year}</h1>
            <h4>Technologies Used: {tech} </h4>
            <p>{description}</p>

            <button onClick={()=> {
                        window.location.href = `https://github.com/${gitLink}`
                    }}>GitHub</button>
            
            <div>
            <br/>
            </div>
        </div>
    );
}