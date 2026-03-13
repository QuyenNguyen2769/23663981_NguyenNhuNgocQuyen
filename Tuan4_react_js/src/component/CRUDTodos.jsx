import React, {useState, useEffect} from 'react'

function CRUDTodos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // State để lưu trữ giá trị của input
    const [newTodo, setNewTodo] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                setLoading(true);   
                const res = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=10");
                if (!res.ok) throw new Error("không tải được danh sách!!");
                const data = await res.json();
                setTodos(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }   
            };
            fetchTodos();
    }, []);

    const handleAddTodo = async (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return; // Không thêm nếu input rỗng
        try {
            setIsSubmitting(true);
            const newTodoData = {
                title: newTodo,
                completed: false,
                userId: 1
            };
            const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newTodoData)
            });
            if (!res.ok) throw new Error("Thêm thất bại!!");
            const savedTodo = await res.json();
            setTodos([savedTodo, ...todos]); // Thêm todo mới vào đầu danh sách
            setNewTodo(""); //xóa input sau khi thêm thành công
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };
    // Hàm xử lý xóa todo
    const handleDeleteTodo = async (id) => {
        const backupTodos = [...todos]; // Lưu trữ danh sách hiện tại để rollback nếu xóa thất bại
        setTodos(todos.filter(todo => todo.id !== id)); // Xóa todo khỏi UI ngay lập tức
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
                method: "DELETE"
            });
            if (!res.ok) throw new Error("Xóa thất bại!!");
        } catch (err) {
            alert('Xóa thất bại, vui lòng thử lại sau!');
            setTodos(backupTodos); // khôi phục lại danh sách cũ nếu xóa thất bại
        }
    };
    
   return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ color: 'red' }}>Bài 5</h1>
      <h2>CRUD Todos (Nâng cao)</h2>

      {/* KHU VỰC FORM THÊM MỚI */}
      <form onSubmit={handleAddTodo} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nhập việc cần làm..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          disabled={isSubmitting} // Khóa ô gõ khi đang gửi
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        {/* Nút bấm tự động đổi chữ và bị mờ (disable) khi isSubmitting là true */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ padding: '10px 10px', borderRadius: '7px', backgroundColor: isSubmitting ? '#ccc' : 'green', color: 'white', border: 'none', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
        >
          {isSubmitting ? 'Đang thêm...' : 'Thêm mới'}
        </button>
      </form>

      <hr />

      {/* HIỂN THỊ DANH SÁCH */}
      {loading && <p>Đang tải danh sách...</p>}
      {error && <p style={{ color: 'red' }}>Lỗi: {error}</p>}

      {!loading && !error && (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <li 
              key={todo.id} 
              style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderBottom: '1px solid #ddd', alignItems: 'center' }}
            >
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                #{todo.id} - {todo.title}
              </span>
              <button 
                onClick={() => handleDeleteTodo(todo.id)}
                style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}
              >
                Xóa
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CRUDTodos;