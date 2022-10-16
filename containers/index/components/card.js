
const Card = (props) => {
    let { data } = props
    return (
        <div className="item-card">
            <div className={`image image-${data.house}`}>

            </div>
            <div className='data'>

            </div>
        </div>
    )
}

export default Card;