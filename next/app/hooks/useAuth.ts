import UseUUID from "./UseUUID";

type LoginProps = { userName: string };

export type UserType = {
  userId: string;
  userName: string;
};

export default function UseAuth() {
  const login = ({ userName }: LoginProps) => {
    if (userName === "") {
      return null;
    }

    const { UUID4 } = UseUUID();

    const userId = UUID4();

    const user = {
      userId,
      userName,
    };

    localStorage.setItem("user", JSON.stringify(user));

    return user;
  };

  const getUser = () => {
    const user =
      '{"userId":"51f44a35-3c8f-4f07-97d2-79c593c0a60e","userName":"tuio"}';

    if (!user) {
      return null;
    }

    return JSON.parse(user);
  };

  return { getUser, login };
}
