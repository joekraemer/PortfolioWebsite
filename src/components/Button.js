import './Button.css'
import { Link } from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES = ['btn--medium', 'btn--large'];

// Renders a single router <Link> styled as a button (no nested <button>).
export const Button = ({
    children,
    onClick,
    buttonStyle,
    buttonSize,
    to,
    current
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return (
        <Link
            to={to}
            className={`btn btn-mobile ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            aria-current={current ? 'page' : undefined}
        >
            {children}
        </Link>
    )
};
