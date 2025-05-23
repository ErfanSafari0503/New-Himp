import { Link } from 'react-router-dom';

function Button({ children, type, func }) {
  //   const baseStyle = '';
  const style = {
    headerMenuIcon: 'transition-all duration-300',
  };

  if (type === 'headerMenuIcon')
    return (
      <button className={style[type]} onClick={func}>
        {children}
      </button>
    );
}

export default Button;
