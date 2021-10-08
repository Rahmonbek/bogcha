import { httpRequest, url } from "./Host";

export const getRahbariyat = () => {
  var config = {
    url: `${url}/rahbariyat/`,
    method: "get",
  };
  return httpRequest(config);
};

export const deleteTeacher = (id) => {
  var config = {
    url: `${url}/rahbariyat/${id}/`,
    method: "delete",
  };
  return httpRequest(config);
};

<<<<<<< Updated upstream
export const pushTeacher = (teacher) => {
  var config = {
    url: `${url}/rahbariyat/`,
    method: "post",
    data: teacher,
  };
  return httpRequest(config);
};

export const editTeachers = (teacher, id) => {
  var config = {
    url: `${url}/rahbariyat/${id}/`,
    method: "patch",
    data: teacher,
=======
export const getXodimlar = () => {
  var config = {
    url: `${url}/xodim/`,
    method: "get",
>>>>>>> Stashed changes
  };
  return httpRequest(config);
};
