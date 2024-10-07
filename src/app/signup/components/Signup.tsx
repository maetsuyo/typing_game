import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [id, setId] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const res = await fetch("http://localhost:3011/users");
    const users = res.json();

    if (users.some(user => user.id === id)) {
      setErrorMessage("このIDはすでに使用されています。");
      return
    }
  };

  return (
    <form className="bg-white shadow-lg rounded-lg p-10 max-w-xs mx-auto mt-12 border border-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">SIGNUP</h1>
      <div className="mb-6">
        <input
          type="text"
          name="name"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-4 w-full transition duration-300 ease-in-out transform focus:border-blue-500 focus:ring focus:ring-blue-200 hover:shadow-md"
          placeholder="name"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="id"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-4 w-full transition duration-300 ease-in-out transform focus:border-blue-500 focus:ring focus:ring-blue-200 hover:shadow-md"
          placeholder="id"
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          name="password"
          className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-4 w-full transition duration-300 ease-in-out transform focus:border-blue-500 focus:ring focus:ring-blue-200 hover:shadow-md"
          placeholder="password"
        />
      </div>
      <p>
        <button
          type="submit"
          className="w-full text-white bg-gradient-to-r from-blue-500 to-purple-600 font-semibold rounded-lg py-2 hover:from-blue-600 hover:to-purple-700 transition duration-300 ease-in-out text-lg"
        >
          SIGNUP
        </button>
      </p>
    </form>
  );
};

export default Signup;