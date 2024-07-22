
function FormInput({label, value, onInput}) {
    return (
        <div>
            <label>{label}</label>
            <input type="number" value={value} onChange={(e) => onInput(e.target.value)} />
        </div>
    );
}

export default FormInput;