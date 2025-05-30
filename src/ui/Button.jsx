import { Link } from 'react-router-dom';

function Button({ children, type, to, func, color, shadow, linkStyle }) {
  const baseStyle = `rounded-2xl ${color} px-6 py-4 ${shadow}`;
  const style = {
    headerMenuIcon: 'transition-all duration-300',
  };

  if (type === 'headerMenuIcon')
    return (
      <button className={style[type]} onClick={func}>
        {children}
      </button>
    );

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
}

export default Button;
