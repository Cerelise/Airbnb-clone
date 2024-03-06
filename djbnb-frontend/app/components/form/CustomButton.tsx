interface CustomButtonProps {
  label: string;
  className?: string;
  onClick: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={`w-full py-4 bg-airbnb hover:bg-airbnb-dark text-white rounded-xl transition cursor-pointer ${className}`}
      >
        {label}
      </button>
    </>
  );
};

export default CustomButton;
