import React from "react";
import { Card, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function Profile() {
  const [user, setUser] = useState({});
  const checkLogin = async () => {
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

      if (!res.status === 200) {
        throw new Error(res.error);
      } else {
        setUser(data);
      }
    } catch (err) {
      console.log(err);
      // history("/login");
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <div className="profile">
      <Container>
        <Card className="mx-5 px-5 shadow">
          <h2 className="text-center border-bottom mb-3"> My Profile</h2>
          <p>
            <strong>Name : </strong> {user.name}
          </p>
          <p>
            <strong>Email : </strong> {user.email}
          </p>
          <p>
            <strong>Contact No. : </strong> {user.mobile}
          </p>
          <p>
            <strong>Is Verified: </strong> {user.verified && "True"}
            {!user.verified && "False"}
          </p>
        </Card>
      </Container>
    </div>
  );
}

export default Profile;
