import UseAuth from "@/app/hooks/UseAuth";
import Header from "@/app/ui/Header";

export default function page({ children }: any) {
  const { getUser } = UseAuth();

  const userName = getUser().userName;

  return (
    <div>
      <Header userName={userName} />

      <div className="p-8 bg-gray-200 min-h-[calc(100vh-56px)]">{children}</div>
    </div>
  );
}
