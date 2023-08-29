import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import CommentForm from "../components/CommentForm";

export async function getServerSideProps() {
  const response = await axios.get("http://your-django-backend-url/api/posts/");
  const posts = response.data;
  return {
    props: { posts },
  };
}

const Home = ({ posts }) => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-4">
        <PostForm />
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 mb-4 shadow">
            {post.content}
            <CommentForm postId={post.id} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
