const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const reviewsRouter = require('../server/reviewsRoutes');
const express = require('express');
const request = require('supertest');
require('dotenv').config();


// Create an instance of the express app and use the reviewsRouter
// const app = express();
// app.use('/reviews', reviewsRouter);

// // Create a new instance of axios mock adapter
// const mock = new MockAdapter(axios);

// // Mock the process.env.TOKEN value
// process.env.TOKEN = process.env.TOKEN;

describe('reviewsRoutes', () => {
  // Test getAllReviews endpoint
  it('should get all reviews', async () => {
    const productId = 37311;
    const mockResponseData = {
      "product": "37311",
      "page": 0,
      "count": 5,
      "results": [
          {
              "review_id": 1280318,
              "rating": 3,
              "summary": "Thog dont caare",
              "recommend": false,
              "response": null,
              "body": "Thog dont caare",
              "date": "2023-07-07T00:00:00.000Z",
              "reviewer_name": "Thog",
              "helpfulness": 210,
              "photos": []
          },
          {
              "review_id": 1279218,
              "rating": 3,
              "summary": "THIS IS A TEST",
              "recommend": false,
              "response": null,
              "body": "THIS IS ALSO A TEST",
              "date": "2023-03-21T00:00:00.000Z",
              "reviewer_name": "TEST123 ",
              "helpfulness": 61,
              "photos": [
                  {
                      "id": 2457753,
                      "url": "http://res.cloudinary.com/dmmzqckuu/image/upload/v1667506778/mwsvroray4fie6rakkqj.jpg"
                  }
              ]
          },
          {
              "review_id": 1280316,
              "rating": 3,
              "summary": "what the blob",
              "recommend": false,
              "response": null,
              "body": "it was okay",
              "date": "2023-07-07T00:00:00.000Z",
              "reviewer_name": "blob",
              "helpfulness": 5,
              "photos": []
          },
          {
              "review_id": 1280312,
              "rating": 3,
              "summary": "what the blob",
              "recommend": false,
              "response": null,
              "body": "it was okay",
              "date": "2023-07-07T00:00:00.000Z",
              "reviewer_name": "blob",
              "helpfulness": 3,
              "photos": []
          },
          {
              "review_id": 1280314,
              "rating": 3,
              "summary": "what the blob",
              "recommend": false,
              "response": null,
              "body": "it was okay",
              "date": "2023-07-07T00:00:00.000Z",
              "reviewer_name": "blob",
              "helpfulness": 3,
              "photos": []
          }
      ]
  };


    mock.onGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`).reply(200, mockResponseData);

    const response = await request(app).get('/reviews/getAllReviews')
      .query({ product_id: productId });

    // console.log('Request URL:', response.request.url);
    // console.log('Request Params:', response.request.params);
    // console.log('Response Status:', response.status);
    // console.log('Response Body:', response.body);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponseData.results);
  });

  // Test postReviews endpoint
  it('should post a review', async () => {
    const requestData = {
      product_id: 37311,
      rating: 4,
      summary: 'Great product!',
      body: 'I really enjoyed using this product.',
      recommend: true,
      name: 'User123',
      email: 'user@example.com',
      characteristics: {
        125031: 4,
        125032: 5,
        125033: 3,
        125034:3

      },
      photos: []
     };
    // const mockResponseData = { /* ... response data here ... */ };
    mock.onPost(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews`).reply(201);

    const response = await request(app)
      .post('/reviews/reviews')
      .send(requestData);

    expect(response.status).toBe(201);
    // expect(response.body).toEqual(mockResponseData);
  });

  // Test getRatings endpoint
  it('should get ratings meta data', async () => {
    const productId = 37311;
    const mockResponseData = {
      "product_id": "37311",
    "ratings": {
        "1": "92",
        "2": "60",
        "3": "184",
        "4": "180",
        "5": "433"
    },
    "recommended": {
        "false": "209",
        "true": "740"
    },
    "characteristics": {
        "Fit": {
            "id": 125031,
            "value": "3.0470779220779221"
        },
        "Length": {
            "id": 125032,
            "value": "3.1170886075949367"
        },
        "Comfort": {
            "id": 125033,
            "value": "3.2331691297208539"
        },
        "Quality": {
            "id": 125034,
            "value": "3.2521150592216582"
        }
    }
    };
    mock.onGet(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta`).reply(200, mockResponseData);

    const response = await request(app).get('/reviews/getRatings')
      .query({ product_id: productId });

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockResponseData);
  });

  // Test updateHelpful endpoint
  it('should update helpfulness of a review', async () => {
    const reviewId = '1280318';
    mock.onPut(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`).reply(204);

    const response = await request(app).put(`/reviews/updateHelpful/${reviewId}`);
    expect(response.status).toBe(204);
  });

  it('should handle updateHelpful error', async () => {
    const reviewId = '1280318';

    // Mock error response for PUT request
    mock.onPut(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewId}/helpful`).reply(400, { error: 'Bad request' });

    const response = await request(app).put(`/reviews/updateHelpful/${reviewId}`);
    expect(response.status).toBe(400);
  });



});
