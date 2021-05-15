package main

import (
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/dynamodb"
	"github.com/aws/aws-sdk-go/service/dynamodb/dynamodbattribute"
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

func haveVistor() bool {
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

	if len(result.Item) == 0 {
		return false
	}
	return true

}

// Create Vistor Item if none exists
func createVistor() error {
	vistor := Vistor{Name: "Vistors", Count: 1}

	av, err := dynamodbattribute.MarshalMap(vistor)
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("Creating Vistor Item")
	input := &dynamodb.PutItemInput{
		Item:      av,
		TableName: aws.String(tableName),
	}
	_, errPut := svc.PutItem(input)
	if errPut != nil {
		fmt.Println(err)
		return err
	}
	return nil
}

func addVistor() {
	updateInput := &dynamodb.UpdateItemInput{
		ExpressionAttributeNames: map[string]*string{
			"#C": aws.String("Count"),
		},
		ExpressionAttributeValues: map[string]*dynamodb.AttributeValue{
			":inc": {
				N: aws.String("1"),
			},
		},
		Key: map[string]*dynamodb.AttributeValue{
			"Name": {
				S: aws.String("Vistors"),
			},
		},
		TableName:        aws.String(tableName),
		UpdateExpression: aws.String("SET #C = #C + :inc"),
	}
	_, err := svc.UpdateItem(updateInput)
	if err != nil {
		fmt.Println("Error in Updating")
		fmt.Println(err)
	}
	fmt.Println("Vistor added")
}

func handler(request events.APIGatewayProxyRequest) (interface{}, error) {
	headers := make(map[string]string)
	headers["Access-Control-Allow-Origin"] = "*"
	headers["Access-Control-Allow-Headers"] = "*"
	headers["Access-Control-Allow-Credentials"] = "true"

	var errVistor error
	if haveVistor() {
		addVistor()
	} else {
		errVistor = createVistor()
	}

	if errVistor != nil {
		fmt.Println("Got error in Put item")
		fmt.Println(errVistor)
		return events.APIGatewayProxyResponse{
			Headers:    headers,
			Body:       string("Put Item Error"),
			StatusCode: 502,
		}, nil
	}

	return events.APIGatewayProxyResponse{
		Body:       fmt.Sprintf("Added Vistor"),
		StatusCode: 200,
	}, nil
}

func main() {
	lambda.Start(handler)
}
