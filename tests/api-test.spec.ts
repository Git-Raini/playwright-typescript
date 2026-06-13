import {test, expect} from '@playwright/test';

test('API test', async ({request}) => {

    //GET 

  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.id).toBe(1);
  expect(body).toHaveProperty('title');

  // 2. POST Request (Simulates creating a new post)
  const createResponse = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Interview Preparation',
      body: 'Learning Playwright API testing.',
      userId: 101
    },
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer placeholder-token'
    }
  });

  // JSONPlaceholder returns a 201 status code for a successful creation
  expect(createResponse.status()).toBe(201);
  
  const newPost = await createResponse.json();
  expect(newPost.title).toBe('Interview Preparation');
});
