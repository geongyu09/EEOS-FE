"use client";

import { useSearchParams } from "next/navigation";
// import { useEffect } from "react";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import { useSlackLoginMutation } from "@/hooks/query/useAuthQuery";

const LoginSlackCallbackPage = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");

  const { mutate: loginSlack } = useSlackLoginMutation();

  // useEffect(() => {
  //   if (code) {
  //     loginSlack({
  //       code,
  //
  //     });
  //     console.log("code", code);
  //   }
  // }, [code]);

  return (
    <>
      <LoadingSpinner />
      <button
        onClick={() =>
          loginSlack({
            code,
            redirect_uri: process.env.NEXT_PUBLIC_SLACK_REDIRECT_URI,
          })
        }
      >
        Login 요청
      </button>
    </>
  );
};
export default LoginSlackCallbackPage;
