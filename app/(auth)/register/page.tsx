import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthLayout
      title="Create an account"
      description="Sign up to start managing your health information."
    >
      <div>
        <RegisterForm />
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
