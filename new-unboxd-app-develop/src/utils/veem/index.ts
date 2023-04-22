export const isEmpty = (data: any[]) =>
  data && data?.length === 0 ? true : false;

export const isObjEmpty = (data: any) => {
  for (var key in data) {
    if (data.hasOwnProperty(key)) return false;
  }
  return true;
};

export const isThere = (data: any) => data ? true : false;

export const isEmail = (email: string) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
};