import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComments} from "../models/IComments";


let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

});
export const getUsers = async (): Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>('/users');
    return axiosResponse.data;
}

export const getPosts = async (): Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<IPost[]>('/posts');
    return axiosResponse.data;
}

export const getPostOfUsers = async (id:string) => {
    let response = await axiosInstance.get<IPost[]>('posts?userId=' + id);
    return response.data;
}

export const getCommentOfPosts = async (id:string) => {
    let response = await axiosInstance.get<IComments[]>('comments?postId=' + id);
    return response.data;
}

export const getComments = async (): Promise<IComments[]> => {
    let axiosResponse = await axiosInstance.get<IComments[]>('/comments');
    return axiosResponse.data;
}