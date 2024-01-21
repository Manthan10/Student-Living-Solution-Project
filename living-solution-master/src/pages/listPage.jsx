import React from "react";
import List from "../components/listyouritem";
import NavBar from "../components/navBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ListPage() {
  const history = useNavigate();

  const callListPage = async () => {
    try {
      const res = await fetch("http://localhost:8000/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (err) {
      console.log(err);
      history("/login");
    }
  };

  useEffect(() => {
    callListPage();
  }, []);

  return (
    <div>
      <NavBar />
      <List />
    </div>
  );
}

export default ListPage;
