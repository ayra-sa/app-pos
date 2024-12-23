import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const WithAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const auth = useSelector((state) => state?.globalReducer);
    const responVerifyOtpLogin = useSelector(
      (state) => state?.ResponVerifyOtpLoginReducer
    );

    // useEffect(() => {
    //   console.log(responVerifyOtpLogin);
    //   if (!responVerifyOtpLogin?.access_token) {
    //     router.push("/login");
    //     return;
    //   }
    // }, []);

    return <WrappedComponent {...props} />;
  };
};

export default WithAuth;
