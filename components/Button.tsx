type ButtonProps = {
  onClick?:
    | (() => void)
    | ((event: React.MouseEvent<HTMLButtonElement>) => void);
  text: string;
  textClassInfo: string;
  buttonClassInfo: string;
  secondaryTextWrapperClassInfo?: string;
  secondaryTextClassInfo?: string;
  secondaryText?: string;
};

const Button = ({ params }: { params: ButtonProps }) => {
  const { onClick, text, textClassInfo, buttonClassInfo, secondaryTextWrapperClassInfo, secondaryTextClassInfo, secondaryText } = params;
  return (
    <button className={buttonClassInfo} onClick={onClick}>
      <span className={textClassInfo}>{text}</span>

      {/* Optional - used for displaying online/offline numbers */}
      <div className={secondaryTextWrapperClassInfo}>
        <span className={secondaryTextClassInfo}>
          {secondaryText}
        </span>
      </div>
    </button>
  );
};

export default Button;
