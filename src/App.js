// src/App.js
import React from "react";
import SocialApp from "./pages/SocialApp";

const App = () => {
  const posts = [
    {
      image: "https://source.unsplash.com/random/400x200",
      title: "Postagem 1",
      text: "Este é o texto da postagem 1.",
      date: new Date(),
      author: { name: "Autor 1", avatar: "https://via.placeholder.com/40" },
      likes: 20,
      shares: 5,
      comments: [
        { author: "Comentador 1", text: "Ótimo post!" },
        { author: "Comentador 2", text: "Concordo com você!" },
      ],
    },
  ];

  const friends = [
    {
      name: "Amigo 1",
      avatar: "https://via.placeholder.com/40",
      commonFriends: 5,
    },
    {
      name: "Amigo 2",
      avatar: "https://via.placeholder.com/40",
      commonFriends: 3,
    },
  ];

  const suggestions = [
    {
      name: "Sugestão 1",
      avatar: "https://via.placeholder.com/40",
      commonFriend: "Amigo 3",
    },
    {
      name: "Sugestão 2",
      avatar: "https://via.placeholder.com/40",
      commonFriend: "Amigo 4",
    },
  ];

  return (
    <div className="App">
      <SocialApp posts={posts} friends={friends} suggestions={suggestions} />
    </div>
  );
};

export default App;
