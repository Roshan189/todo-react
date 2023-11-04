import "./App.css";
import TodoApp from "./TodoApp";

function App() {
  return (
    <div
      className="container border border-primary rounded mt-5"
      style={{
        background: `url(https://images.unsplash.com/photo-1459802071246-377c0346da93?auto=format&fit=crop&q=80&w=1795&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        backgroundSize: "cover",
      }}
    >
      <TodoApp />
    </div>
  );
}

export default App;
