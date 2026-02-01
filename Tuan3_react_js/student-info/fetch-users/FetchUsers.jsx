import { useReducer } from "react";

const initialState = {
  status: "idle", // idle | loading | success | error
  users: [],
  error: null,
};

// PURE FUNCTION
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        status: "loading",
        users: [],
        error: null,
      };

    case "FETCH_SUCCESS":
      return {
        status: "success",
        users: action.payload,
        error: null,
      };

    case "FETCH_ERROR":
      return {
        status: "error",
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
}

function FetchUsers() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUsers = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const res = await fetch(
         "https://jsonplaceholder.typicode.com/users"
         
      );

      await new Promise(resolve => setTimeout(resolve, 2000));

      if (!res.ok) throw new Error("Fetch failed");

      const data = await res.json();

      dispatch({
        type: "FETCH_SUCCESS",
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: "FETCH_ERROR",
        payload: err.message,
      });
    }
  };

  return (
    <div>
      <h2>Fetch Users (useReducer)</h2>

      {state.status === "idle" && (
        <button onClick={fetchUsers}>Load Users</button>
      )}

      {state.status === "loading" && <p>Loading...</p>}

      {state.status === "error" && (
        <>
          <p style={{ color: "red" }}>Error: {state.error}</p>
          <button onClick={fetchUsers}>Retry</button>
        </>
      )}

      {state.status === "success" && (
        <ul>
          {state.users.map(user => (
            <li key={user.id}>
              {user.name} – {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FetchUsers;
