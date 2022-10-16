const Button = (props) => {
    let { label, onClick, className } = props;
    return (
        <button className={`btn-default ${className || ""}`} onClick={onClick} >{label}</button>
    )
}

export default Button;