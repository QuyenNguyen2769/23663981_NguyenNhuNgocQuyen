import { useSearch } from '../hooks/useSearch';

function SearchBox() {
  const { inputValue, handleInputChange, results, loading } = useSearch();

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid #aaa", borderRadius: "8px" }}>
      <h2>Tìm kiếm Sản phẩm (Bài 8 - Debounce)</h2>
      
      <input 
        type="text" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Gõ để tìm kiếm..."
        style={{ padding: "8px", width: "100%", marginBottom: "10px" }}
      />

      {loading && <p style={{ color: "blue" }}>⏳ Đang tìm kiếm...</p>}

      {!loading && results.length > 0 && (
        <ul style={{ textAlign: "left" }}>
          {results.map((item) => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
      )}

      {!loading && inputValue && results.length === 0 && (
        <p>Không tìm thấy sản phẩm nào.</p>
      )}
    </div>
  );
}

export default SearchBox;
