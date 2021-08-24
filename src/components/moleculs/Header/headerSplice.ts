export const navigate = (route: string, history: any, cb: any) => {
  console.log("navigate");
  history.push(route);
  cb(false);
};
