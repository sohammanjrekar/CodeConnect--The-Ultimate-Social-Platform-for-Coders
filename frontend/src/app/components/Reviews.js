import React from 'react';

const Reviews = ({ comments, loading, error, commentContent, setCommentContent, handleCommentSubmit }) => (
    <div className="md:w-3/5 w-3/4 px-10 flex flex-col gap-2 p-5 bg-gray-800 text-white mx-auto">
        <h1 className="py-5 text-lg">Reviews</h1>
        <div>
            <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)} // Use the passed function to update commentContent
                placeholder="Write your comment here..."
                rows={4}
                className="p-2 bg-transparent focus:outline-none w-full"
            />
            <button onClick={handleCommentSubmit} disabled={loading} className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                {loading ? 'Submitting...' : 'Submit'}
            </button>
            {error && <p>{error}</p>}
        </div>
        {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-3 mt-14">
                <div className="flex flex-col gap-4 bg-gray-700 p-4">
                    <div className="flex justify justify-between">
                        <div className="flex gap-2">
                            <div className="w-7 h-7 text-center rounded-full bg-red-500"></div>
                            {comment.userData && (
                                <span>User: {comment.userData.username}</span>
                            )}
                        </div>
                        <div className="flex p-1 gap-1 text-orange-300">
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star" />
                            <ion-icon name="star-half" />
                        </div>
                    </div>
                    <div>
                        {comment.content}
                    </div>
                    <div className="flex justify-between">
                        <span>Feb 13, 2021</span>
                        <button className="p-1 px-2 bg-gray-900 hover:bg-gray-950 border border-gray-950 bg-opacity-60">
                            <ion-icon name="share-outline" /> Share
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

export default Reviews;
