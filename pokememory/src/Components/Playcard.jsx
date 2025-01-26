

export default function Playcard(props) {
    return (
        <div className="playCard">
            <img src={ props.imageUrl} />
            <h2>{props.name}</h2>
        </div>
    )
}