import request from "../utils/request";

// export const login = (data) =>
//     request({
//         url: '/api/login',
//         method: 'post',
//         data
//     })

export const apiTest = (params) =>
  request({
    url: "/api/test",
    method: "get",
    params,
  });
