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
      <div className="bg-gray-100">
        <h1 className="text-center text-3xl font-bold pt-5 mb-3">LOGIN</h1>
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