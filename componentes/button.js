const Button = (props) => {
    let { label, action } = props;
    return (
        <button className="btn-default" onClick={() => { action }} >{label}</button>
    )
}

export default Button;