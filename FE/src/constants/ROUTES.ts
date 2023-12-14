const ROUTES = {
  HOME: "/",
  CREATE: "/create",
  DETAIL: (programId: number) => `/detail/${programId}`,
  EDIT: (programId: number) => `/edit/${programId}`,
  ERROR: "/error",
};

Object.freeze(ROUTES);
export default ROUTES;
