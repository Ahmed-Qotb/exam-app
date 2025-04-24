export type userDataType = {
  user: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
  } & dataBaseProbs;
} & APIResponse<T>;

export type LogOut = successfulResponse<T> | errorResponse;
