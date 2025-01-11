import Posts from "./components/posts";
import PostFetcher from "./components/post-fetcher";
export default function Fetch() {

    return (
        <main>
            Fetch

            <h2>Client component with a server component child</h2>
            <PostFetcher>
                <Posts limit={10}/>
            </PostFetcher>
        </main>
    );
}