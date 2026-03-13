import React, {useState, useEffect} from 'react'

function SearchAndFilter() {

    // kho chứa data
    const [posts, setposts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    //gọi API
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const response = await fetch("https://jsonplaceholder.typicode.com/posts");
                if (!response.ok) throw new Error("Lỗi khi tải danh sách"); 
                const data = await response.json();
                setposts(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
                }
        };
        fetchPosts();
            },[]);
            const filteredPosts = posts.filter((post) =>{
                return post.title.toLowerCase().includes(searchTerm.toLowerCase());
            });

    return (
    <div>
        <h1 style={{color: 'red'}} >Bài 4</h1>
        <input type="text" placeholder='Nhập tiêu đề cần tìm ...' style={{width: '80%', padding: '10px', fontSize: '16px'}} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    {loading && <p style={{ color: 'blue' }}>Đang tải bài viết...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Hiển thị danh sách ĐÃ LỌC */}
      {!loading && !error && (
        <>
          <p>Tìm thấy: <strong>{filteredPosts.length}</strong> bài viết</p>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
        
            {filteredPosts.map((post) => (
              <li 
                key={post.id} 
                style={{ 
                  backgroundColor: '#f4f4f4', 
                  margin: '10px 0', 
                  padding: '15px', 
                  borderRadius: '5px' 
                }}
              >
                <strong>#{post.id} - {post.title}</strong>
                <p style={{ color: '#555', fontSize: '14px' }}>{post.body}</p>
              </li>
            ))}
          </ul>
          
          {/* Giao diện khi search không ra kết quả nào */}
          {filteredPosts.length === 0 && searchTerm !== '' && (
            <p style={{ color: 'orange', textAlign: 'center' }}>
              Không tìm thấy bài viết nào có chứa từ "{searchTerm}"
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default SearchAndFilter;