const Button = (props) => {
    let { label, onClick, className, disabled } = props;
    return (
        <button disabled={disabled} className={`btn-default ${className || ""}`} onClick={onClick} >{label}</button>
    )
}

export default Button;