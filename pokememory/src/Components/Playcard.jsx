export default function Playcard(props) {
    return (
        <div>
            <img src={ props.imageUrl} />
            <h2>{props.pokeName}</h2>
        </div>
    )
}