import * as React from "react";
import LoginProvider from "./app/context/LoginProvider";
//Navigation
import Router from "./app/navigators/Router";
import { NavigationContainer } from "@react-navigation/native";
import { db } from "./app/database/Config";
import { useEffect, useState } from "react";
import { QuerySnapshot } from "firebase/firestore";
import { View, Text } from "react-native";

export default function App() {
  return (
    // <Answers />
    <LoginProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </LoginProvider>
  );
}

const Answers = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPostsFromFirebase = [];
    const sub = db.collection("test").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        getPostsFromFirebase.push({ ...doc.data(), key: doc.id });
      });
      setPosts(getPostsFromFirebase);
      setLoading(false);
    });

    return () => sub();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hi</Text>
      {posts.length > 0 ? (
        posts.map((post) => <Text key={post.key}>{post.answer}</Text>)
      ) : (
        <Text>no post</Text>
      )}
    </View>
  );
};
