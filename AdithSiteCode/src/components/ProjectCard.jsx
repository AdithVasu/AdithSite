export default function ProjectCard({ title, year, tech, description, gitLink }) {
    return (
        <div style={{
            backgroundColor: '#a0c4ff',
            borderRadius: 5,
            maxWidth: 250,
            height: 400,
            padding: '10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}>
            {/* Title and Year */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center', 
                height: '40px' 
            }}>
                <h1 style={{ margin: 0, fontSize: '20px' }}>{title}</h1>
                <h1 style={{ margin: 0, fontSize: '18px' }}>{year}</h1>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                height: '30px', 
            }}>
                <h4 style={{ margin: 0 }}>Technologies Used: {tech}</h4>
            </div>

            <p>{description}</p>

            <button onClick={() => {
                window.location.href = `https://github.com/${gitLink}`;
            }}>
                GitHub
            </button>
        </div>
    );
}
