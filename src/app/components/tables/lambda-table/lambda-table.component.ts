import { Component, OnInit } from '@angular/core';
import { LambdaFunctionInformation } from 'src/app/models/lambda-function-information';
import { AwsManagerApiService } from 'src/app/services/aws-manager-api.service';

@Component({
  selector: 'app-lambda-table',
  templateUrl: './lambda-table.component.html',
  styleUrls: ['./lambda-table.component.scss']
})
export class LambdaTableComponent implements OnInit {

  lambdas : LambdaFunctionInformation[] = [];

  constructor(private awsManagerApi : AwsManagerApiService) { }

  async ngOnInit() {
    this.lambdas = await this.awsManagerApi.getLambdaFunctions();
    console.log(this.lambdas);
  }

  inspectLambdaFunction(name : string){
    var url = "https://sa-east-1.console.aws.amazon.com/lambda/home?region=sa-east-1#/functions/" + name;
    window.open(url, "_blank")
  }

}
