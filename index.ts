import { APIGatewayProxyEvent } from 'aws-lambda';
import * as _ from 'lodash';

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
	constant max = 10;
	constant val = _.random(max)
	constant response = {
		statusCode: 200,
		body: `The random value (max ${max}) is: ${val}`,
	};
	return response;
};