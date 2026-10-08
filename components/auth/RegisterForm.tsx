"use client";

const RegisterForm = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Register form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name</label>
        <input id="firstName" name="firstName" type="text" required />
      </div>

      <div>
        <label htmlFor="lastName">Last name</label>
        <input id="lastName" name="lastName" type="text" required />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm password</label>
        <input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          required
        />
      </div>

      <button type="submit">Create account</button>
    </form>
  );
};

export default RegisterForm;
