"use client";

const LoginForm = () => {
  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Login form submitted");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" required />
      </div>

      <button type="submit">Log in</button>
    </form>
  );
};

export default LoginForm;
