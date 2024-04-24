import Image from 'next/image';


type ButtonProps = {
  type: 'button' | 'submit';
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  isLoading: boolean;
  options?: object;
  onClick? : () => void;
};
const Button = ({
  type,
  title,
  icon,
  variant,
  full,
  isLoading = false,
  options,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-md border cursor-pointer hover:bg-gray-30 hover:text-cream-50 ${variant} ${
        full && 'w-full'
      }`}
      type={type}
      {...options}
      onClick={onClick}
    >

      <label className="regular-14 lg:bold-16 whitespace-nowrap cursor-pointer">
        {isLoading ? 'Loading...' : title}
      </label>
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
     
    </button>
  );
};

export default Button;
