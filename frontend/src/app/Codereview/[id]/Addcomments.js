import React, { useState, useEffect } from "react";

const Addcomments = ({postid}) => {
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [commentIds, setCommentIds] = useState(new Set());
    const [newCommentContent, setNewCommentContent] = useState("");
  
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/post/posts/${postid}/comments/?page=${page}&limit=3`
        );
        const data = await response.json();
        data.results.forEach((newComment) => {
          if (!commentIds.has(newComment.id)) {
            setComments((prevComments) => [...prevComments, newComment]);
            commentIds.add(newComment.id);
          }
        });
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching comments:", error);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchComments();
    }, []);
  
    const loadMoreComments = () => {
      fetchComments();
    };
  
    const handleCommentSubmit = async (e) => {
      e.preventDefault();
      if (newCommentContent.trim() !== "") {
        try {
          const response = await fetch("http://127.0.0.1:8000/post/comments/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              content: newCommentContent,
              post: postid,
              user:1
            }),
          });
          if (response.ok) {
            // Refresh comments after successful submission
            setComments([]);
            setPage(1);
            fetchComments();
            // Clear the input field after submission
            setNewCommentContent("");
          } else {
            console.error("Failed to submit comment");
          }
        } catch (error) {
          console.error("Error submitting comment:", error);
        }
      }
    };
  
    return (
      <div className="relative mx-16 my-5 px-16" >
        <form onSubmit={handleCommentSubmit}>
          <input
            className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 rounded-lg placeholder:text-slate-600 font-medium pr-20"
            type="text"
            placeholder="Write a comment"
            value={newCommentContent}
            onChange={(e) => setNewCommentContent(e.target.value)}
          />
          <button type="submit" className="hidden"></button>
        </form>


           
            <div className="pt-6">
            {comments.map(comment => (
              <div key={comment.id} className="media flex pb-4">
                <a className="inline-block mr-4" href="#">
                  <img
                    className="rounded-full max-w-none w-12 h-12"
                    src="https://randomuser.me/api/portraits/women/76.jpg"
                  />
                </a>
                <div className="media-body">
                  <div>
                    <a
                      className="inline-block text-base font-bold mr-2"
                      href="#"
                    >
                      Tina Mills
                    </a>
                    <span className="text-slate-500 dark:text-slate-300">
                      3 minutes ago
                    </span>
                  </div>
                  <p>{comment.content}</p>
                  <div className="mt-2 flex items-center">
                    <a className="inline-flex items-center py-2 mr-3" href="#">
                      <span className="mr-2">
                        <svg
                          className="fill-rose-600 dark:fill-rose-400"
                          style={{ width: 22, height: 22 }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55M16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"></path>
                        </svg>
                      </span>
                      <span className="text-base font-bold">{comment.likes}</span>
                    </a>
                    <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                      Repply
                    </button>
                  </div>
                </div>
              </div>
             ))}
              {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="w-full">
            <button
              onClick={loadMoreComments}
              className="py-3 px-4 w-full block bg-slate-100 text-center rounded-lg font-medium hover:bg-slate-200 transition ease-in-out delay-75"
            >
              Load more comments
            </button>
          </div>
        )}
            </div>
          </div>
  )
}

export default Addcomments