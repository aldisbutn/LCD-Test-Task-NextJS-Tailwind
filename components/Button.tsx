type ButtonProps = {
  buttonText: string;
  click?: () => void;
  variant: 'primary' | 'secondary' | 'info';
  number?: number;
  size?: 'small' | 'medium' | 'large';
};

const Button = (props: ButtonProps) => {
  const { buttonText, click, variant, number, size } = props;

  const getButtonStyles = () => {
    if (variant === 'primary') {
      return 'buttonPrimary';
    } else if (variant === 'secondary') {
      return 'buttonSecondary';
    } else if (variant === 'info') {
      return 'buttonInfo';
    }
  };

  const getButtonSize = () => {
    if (size === 'small') {
      return 'buttonSmall';
    } else if (size === 'medium') {
      return 'buttonMedium';
    } else if (size === 'large') {
      return 'buttonLarge';
    }
  };

  const getNumberStyles = () => {
    if (variant === 'primary') {
      return 'buttonNumberPrimary';
    } else if (variant === 'secondary') {
      return 'buttonNumberSecondary';
    }
  };

  return (
    <button
      className={`button ${getButtonStyles()} ${getButtonSize()}`}
      onClick={click}
    >
      {buttonText}
      {number ? (
        <div className={`buttonNumber ${getNumberStyles()}`}>{number}</div>
      ) : (
        ''
      )}
    </button>
  );
};

export default Button;
