const createError = require('/opt/node_modules/http-errors');
const middyWrapper = require('/opt/middy-wrapper');
const vegetableCompany= require('/opt/vegetable-company-allowed'); 
// common-layer/vegetable-company-allowed.js
const products = require('/opt/data/vegetable-products.json');

const handler = async (event, context) => {
    try {
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                products
            })
        }
    } catch (err) {
        console.log(err);
        throw new createError.badRequest();
    }

    return response;
};

exports.handler = middyWrapper(handler)
                    .use(vegetableCompany());