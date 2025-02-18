export interface ApiResponse {
  data: any;
  result: StatusRequest;
}

interface StatusRequest {
  error: string;
  status: boolean;
}
