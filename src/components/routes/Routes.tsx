import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Users from "../pages/users/Users";
import Posts from "../pages/posts/Posts";
import Comments from "../pages/comments/Comments";
import HomePage from "../pages/HomePage";
import UserDetails from "../pages/users/User-Details";
import PostDetails from "../pages/posts/Post-Details";

export const routes = createBrowserRouter([
    {path: "/", element: <MainLayout/>, children: [
            {index: true, element: <HomePage/>},
            {path: "users", element: <Users/>},
            {path: "users/:id", element: <UserDetails/>},
            {path: "posts", element: <Posts/>},
            {path: "posts/:id", element: <PostDetails/>},
            {path: "comments", element: <Comments/>},
        ]}
])