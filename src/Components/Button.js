import './Button.css';

function Button({click, children}) {
    return <button className="button" onClick={click}>{children}</button>
}

export default Button;
