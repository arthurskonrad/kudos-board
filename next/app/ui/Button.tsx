type ButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="bg-red-200 p-2" onClick={onClick}>
      {children}
    </button>
  );
}
