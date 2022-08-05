import request from "../utils/request";

// export const login = (data) =>
//     request({
//         url: '/api/login',
//         method: 'post',
//         data
//     })

export const apiGetUserList = (params) =>
  request({
    url: "/api/users",
    method: "get",
    params,
  });

export const apiTest = (params) =>
  request({
    url: "/api/users",
    method: "get",
    params,
  });
