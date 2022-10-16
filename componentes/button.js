const Button = (props) => {
    let { label, action, className } = props;
    return (
        <button className={`btn-default ${className || ""}`} onClick={() => { action }} >{label}</button>
    )
}

export default Button;