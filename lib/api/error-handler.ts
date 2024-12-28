export class APIError extends Error {
    constructor(
      message: string,
      public statusCode: number = 500,
      public details?: any
    ) {
      super(message);
      this.name = 'APIError';
    }
  }
  
  export function handleAPIError(error: unknown): APIError {
    if (error instanceof APIError) {
      return error;
    }
  
    if (error instanceof Error) {
      return new APIError(error.message);
    }
  
    return new APIError('An unexpected error occurred');
  }