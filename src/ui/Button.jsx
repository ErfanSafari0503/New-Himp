import { Link } from 'react-router-dom';

function Button({
  children,
  type,
  styles,
  to,
  func,
  disabled = false,
  color,
  shadow,
  linkStyle,
}) {
  const baseStyle = `rounded-2xl ${color} px-6 py-4 ${shadow}`;
  const style = {
    headerMenuIcon: 'transition-all duration-300',
    goBack: 'font-DM-Sans text-lg font-semibold text-gray-600',
  };

  if (type === 'headerMenuIcon')
    return (
      <button className={style[type]} onClick={func}>
        {children}
      </button>
    );

  if (to)
    return (
      <button className={baseStyle}>
        <Link
          to={to}
          className={
            linkStyle ||
            'font-DM-Sans text-base font-semibold tracking-wide text-gray-800'
          }
        >
          {children}
        </Link>
      </button>
    );

  if (type === 'goBack') {
    return (
      <button className={style[type]} onClick={func}>
        {children}
      </button>
    );
  }

  if (type === 'submit')
    return (
      <button className={styles} onClick={func} disabled={disabled}>
        {children}
      </button>
    );
}

export default Button;
