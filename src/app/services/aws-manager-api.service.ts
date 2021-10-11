import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LambdaFunctionInformation } from '../models/lambda-function-information';

@Injectable({
  providedIn: 'root'
})
export class AwsManagerApiService {

  url : string = "https://vq1zbnei8c.execute-api.sa-east-1.amazonaws.com/Prod/lambda-functions";

  constructor(private httpClient : HttpClient) { }


  async getLambdaFunctions() : Promise<LambdaFunctionInformation[]>{
    return await this.httpClient.get<LambdaFunctionInformation[]>(this.url,).toPromise();
  }
}
