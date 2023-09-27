type ButtonProps = {
  onClick?: (event: any | null) => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={(event) => {
        if (!onClick) {
          return true;
        }

        onClick(event);
      }}
    >
      {children}
    </button>
  );
}
