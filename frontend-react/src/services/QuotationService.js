import http from "../http-common";

const getAll = () => {
  return http.get("/quotations");
};

const get = id => {
  return http.get(`/quotations/${id}`);
};

const create = data => {
  return http.post("/quotations", data);
};

const update = (id, data) => {
  return http.put(`/quotations/${id}`, data);
};

const remove = id => {
  return http.delete(`/quotations/${id}`);
};

const removeAll = () => {
  return http.delete(`/quotations`);
};

const findByInfo = title => {
  return http.get(`/quotations?info=${title}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByInfo
};