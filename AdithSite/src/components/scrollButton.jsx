export default function ScrollButton({target, name}) {

    function handleScroll() {
        const scrollLoc = document.getElementById(target);
        scrollLoc.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <button style={{margin: '10px', backgroundColor: '#a0c4ff' }} onClick = {handleScroll}>{name}</button>
    );
}