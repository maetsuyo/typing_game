import useLogin from "@/hooks/useLogin";
import LoginForm from "./Login_Form";
import UserInfo from "./UserInfo";

const Login = () => {
  const {
    id,
    pass,
    userInfo,
    errorMessage,
    setId,
    setPass,
    handleSubmit
  } = useLogin();

  return (
    <>
      <div>
        <LoginForm
          id={id}
          pass={pass}
          onChangeId={(e) => setId(e.target.value)}
          onChangePass={(e) => setPass(e.target.value)}
          onSubmitForm={handleSubmit}
        />
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
      </div>
      {userInfo && <UserInfo id={userInfo.id} pass={userInfo.pass} name={userInfo.name} />}
    </>
  );
};

export default Login;