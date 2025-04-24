import ResetPasswordPage from "@/features/reset-password";

const ResetPassword = async ({
  params,
}: {
  params: Promise<{ token: string }>;
}) => {
  const token = (await params).token;
  return <ResetPasswordPage />;
};

export default ResetPassword;
