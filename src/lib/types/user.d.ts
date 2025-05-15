export type UserDataType = {
  user: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    role: string;
    isVerified: boolean;
  } & DatabaseProps;
} & APIResponse<T>;

export type LogOut = SuccessfulResponse<T> | ErrorResponse;
