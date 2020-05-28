import { BaseResponse, HttpError } from "../types/http";
import { ProductsResponseApi } from "../types/app";

export class ApiClient {
  public readonly host: string;

  public constructor(baseUrl: string) {
    this.host = baseUrl;
  }

  public async getProducts(): Promise<BaseResponse<ProductsResponseApi>> {
    const uri = `${this.host}/api-test/products`;
    const response = await fetch(uri);

    try {
      const responseJson = await response.json();

      return {
        statusCode: response.status,
        result: responseJson
      }
    } catch (e) {
      const error: HttpError = new Error(`request for ${uri} failed - ${e}`);
      throw error;
    }
  }
}

export default new ApiClient(`${window.location.protocol}//${window.location.host}`)