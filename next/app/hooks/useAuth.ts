import useUUID from "./useUUID";

type LoginProps = { userName: string };

export type UserType = {
  userId: string;
  userName: string;
};

export default function useAuth() {
  const login = ({ userName }: LoginProps) => {
    const { UUID4 } = useUUID();

    const userId = UUID4();

    const user = {
      userId,
      userName,
    };

    localStorage.setItem("user", JSON.stringify(user));

    return user;
  };

  const getUser = () => {
    const user = localStorage.getItem("user");

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  };

  return { getUser, login };
}