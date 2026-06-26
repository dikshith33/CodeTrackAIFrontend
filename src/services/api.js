import axios from "axios";

const API = axios.create({
    baseURL: "https://codetrackai-backend.onrender.com"
});

export const getLeetCodeProfile = async (username) => {

    const response = await API.get(
        `/api/profile/leetcode/${username}`
    );

    return response.data;
};

export const getCodeforcesProfile = async (
    username
) => {

    const response = await API.get(
        `/api/profile/codeforces/${username}`
    );

    return response.data;
};

export const getCodeforcesHistory =
async (username) => {

    const response = await API.get(
        `/api/profile/codeforces/${username}/history`
    );

    return response.data;
};

export const askAI = async (
    question
) => {

    const response =
        await API.post(
            "/api/ai/chat",
            {
                question
            }
        );

    return response.data;
};