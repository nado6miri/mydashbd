import React from "react";
import { useParams } from "react-router-dom";
import WithRouter from "./withRouter";

const data = {
  velopert: {
    name: "김길동",
    description: "리액트를 좋아하는 개발자",
  },
  ssam: {
    name: "쌤",
    description: "리액트를 배우는 개발자",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = data[username];

  if (!profile) {
    return <div>존재하지 않는 사용자 입니다.</div>;
  }

  return (
    <div>
      <h1>Profile Page입니다.</h1>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      {/*<WithRouter />*/}
    </div>
  );
};

export default Profile;

// https://velog.io/@velopert/react-router-v6-tutorial
