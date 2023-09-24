"use client";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import Feed from "./components/Feed";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./contex/AuthContext";
import Loading from "./components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    const getAuth = async () => {
      try {
        const { data } = await axios.get("/api/auth/me");
        if (data.success) {
          return dispatch({ type: "SET_AUTH", payload: data.message });
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getAuth();
  }, []);
  return (
    <>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <main className="  app_body flex justify-center max-w-7xl px-2 mx-auto sm:px-10 xl:px-20   w-full">
          <Sidebar />
          <Feed />
          <Widget />
        </main>
      )}
    </>
  );
}
