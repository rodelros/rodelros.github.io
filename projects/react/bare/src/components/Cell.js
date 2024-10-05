
export default function Cell({index, handleClick, value}) {
    return(
        <button className="cell" data-index={index} onClick={handleClick}>{value}</button>
    );
}