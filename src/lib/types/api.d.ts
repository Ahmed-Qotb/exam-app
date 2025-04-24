declare type dataBaseProbs = {
  _id: string;
  createdAt: string;
  updatedAt?: string;
};

declare type errorResponse = {
  message: string;
  code: number;
};

declare type successfulResponse<T> = {
  message: string;
} & T;

declare type paginatedResponse<T> = {
  metadata: {
    currentPage: number;
    numberOfPages: number;
    limit: number;
    nextPage?: number;
  };
} & T;

declare type APIResponse<T> = successfulResponse<T> | errorResponse;
