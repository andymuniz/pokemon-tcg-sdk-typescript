type SuccessResponse<T = unknown> = {
  data: T;
};

type ErrorResponse = {
  error: {
    message: string;
    code: number;
  };
};

export type ApiResponse<T = unknown> = SuccessResponse<T> | ErrorResponse;
