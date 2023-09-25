"use client";
import { AuthProvider } from "./AuthContext";
import { PostProvider } from "./PostContext";
import { PostFeedModalProvider } from "./PostFeedModalContext";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <PostProvider>
        <PostFeedModalProvider>{children}</PostFeedModalProvider>
      </PostProvider>
    </AuthProvider>
  );
};

export default Provider;
