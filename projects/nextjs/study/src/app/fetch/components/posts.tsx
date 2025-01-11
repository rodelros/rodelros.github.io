

export default async function Posts({limit}: {limit: number}) {
    const response = await fetch(`https://dummyjson.com/posts?limit=${limit}`);
    const data = await response.json();
 
    return (<>
        <h1>{limit} Posts</h1>
        <ul>
            {data.posts.map((post: any) => (
                <li key={post.id}>
                    <p>{post.body}</p>
                </li>
            ))}
        </ul>
    </>);
}