package main

import (
	"fmt"
	"strconv"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/sfn"
)

type Vistor struct {
	Name  string `json:"Name"`
	Count int    `json:"Count"`
}

var (
	tableName = "Vistors"
	// Create DynamoDB client
	sess = session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
	}))
	svc = dynamodb.New(sess)

	//Create Step Function client
	sessStep = session.Must(session.NewSessionWithOptions(session.Options{
		SharedConfigState: session.SharedConfigEnable,
	}))
	stepSvc = sfn.New(sessStep)
)

func numVistors() int {
	vistorInput := &dynamodb.GetItemInput{
		TableName: aws.String(tableName),
		Key: map[string]*dynamodb.AttributeValue{
			"Name": {
				S: aws.String("Vistors"),
			},
		},
	}
	//var currentVistors Vistor
	result, err := svc.GetItem(vistorInput)
	if err != nil {
		fmt.Println("Failed in Getting Vistors")
		fmt.Println(err)

	}

	if len(result.Item) > 0 {
		numOfVistors, _ := strconv.Atoi(*result.Item["Count"].N)
		return numOfVistors
	}
	return 0
}

func handler(request events.APIGatewayProxyRequest) (interface{}, error) {
	headers := make(map[string]string)
	headers["Access-Control-Allow-Origin"] = "*"
	headers["Access-Control-Allow-Headers"] = "*"
	headers["Access-Control-Allow-Credentials"] = "true"
	numOfVistors := numVistors()

	return events.APIGatewayProxyResponse{
		Body:       fmt.Sprint(numOfVistors),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(handler)
}
