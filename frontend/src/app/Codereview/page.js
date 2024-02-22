"use client"
import React from 'react';
import Addcode from './Addcode';
import PostCard from './PostCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from "next/link";

const Page = () => {
  const posts = [
    { id: 1, title: 'Post 1' },
    { id: 2, title: 'Post 2' },
    { id: 3, title: 'Post 3' },
    // Add more posts as needed
  ];

  return (
    <>
      <Navbar />
      <div>
        <Addcode />
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <Link href={`Codereview/${post.id}`} key={post.id}>
              <PostCard postId={post.id} title={post.title} />
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
