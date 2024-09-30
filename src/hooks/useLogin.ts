import { FormEvent, useState } from "react";

const useLogin = () => {
  const [id, setId] = useState<string>("")
  const [pass, setPass] = useState<string>("")
  const [userInfo, setUserInfo] = useState<{id: string, pass: string, name: string} | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const res = await fetch("http://localhost:3001/users");
      const users = await res.json();
      const confirm = users.find((user : {id: string, pass: string}) => user.id === id && user.pass === pass);
      if (confirm) {
        setUserInfo({id: confirm.id, pass: confirm.pass, name: confirm.name});
      } else {
        setUserInfo(null);
        setErrorMessage("IDまたはパスワードが正しくありません。");
      }
    } catch (error) {
      setErrorMessage("エラー");
    }
  };

  return {
    id,
    pass,
    userInfo,
    errorMessage,
    setId,
    setPass,
    handleSubmit,
  };
};

export default useLogin;