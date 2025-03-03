import { useState, useEffect } from "react";

function Posts() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/posts")
            .then((response) => response.json())
            .then((data) => setPosts(data));
    }, []);
    return (
        <div>
            <h1>Posts</h1>
        </div>
    )
}

export default Posts