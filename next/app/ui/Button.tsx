type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      onClick={() => {
        if (!onClick) {
          return true
        }

        onClick()
      }}
    >
      {children}
    </button>
  );
}
