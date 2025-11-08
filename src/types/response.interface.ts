// src/types/response.interface.ts
export interface IServiceResponse <T = undefined> {
  message: string;
  ok: boolean;
  data?: T;
}
