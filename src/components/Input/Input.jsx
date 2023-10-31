import './Input.css'
const Input = ({
  value,
  errors,
  onChange,
  name,
  type,
  label,
  placeholder,
  minLength,
  maxLength,
  pattern,
  errorMessage,
  isDisabled
}) => {
  return (
      <label htmlFor="" className='label'>{label}
        <input
          style={{color: errors && '#EE3465'}}
          value={value}
          onChange={onChange}
          name={name}
          type={type}
          minLength={minLength}
          maxLength={maxLength}
          placeholder={placeholder}
          pattern={pattern}
          required
          disabled={isDisabled}
        />
        <span className="span_error">{errors && errorMessage}</span>
      </label>
  )
}
export default Input
