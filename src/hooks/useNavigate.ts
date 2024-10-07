import { useRouter } from "next/navigation";

const useNavigate = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/signup")  ;
  };

  return {
    handleClick
  };
};

export default useNavigate;