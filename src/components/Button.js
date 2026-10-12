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
    current,
    className
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
    const classes = ['btn', checkButtonStyle, checkButtonSize, className].filter(Boolean).join(' ')

    return (
        <Link
            to={to}
            className={classes}
            onClick={onClick}
            aria-current={current ? 'page' : undefined}
        >
            {children}
        </Link>
    )
};
