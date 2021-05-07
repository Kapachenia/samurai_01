import React from "react";
import * as axios from "axios";

// функция получит данные от того, кто будет её вызывать
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&
            count=${pageSize}`, {withCredentials: true})
}