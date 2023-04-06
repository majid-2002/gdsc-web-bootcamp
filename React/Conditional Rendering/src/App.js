import "./App.css";

const isLoggedIn = true;

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        {isLoggedIn ? null : (
          <input type="password" placeholder="confirm Password" />
        )}
        <button type="submit">{isLoggedIn ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}

export default App;
