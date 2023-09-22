type ButtonProps = {
  onClick?: (event: any | null) => void;
  children: React.ReactNode;
  type: "button" | "submit" | "reset";
  full: boolean;
};

export default function Button({ onClick, children, type, full }: ButtonProps) {
  return (
    <button
      type={type ? type : "button"}
      className={`${
        full ? "w-full" : ""
      } cursor-pointer inline-block rounded bg-red-600 md:px-6 px-2 pb-2 pt-2.5 md:text-lg text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-red-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-red-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]`}
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
