import assert from 'assert';
import { faker } from '@faker-js/faker';
import { ServerestUser } from '../src/api/ApiTypes';

const injectAny: any = inject;
const serverestApi: any = injectAny('serverestApi');

interface TestContext {
  user?: ServerestUser;
  response?: any;
}

const ctx: TestContext = {};

Given('I prepare a new API user', () => {
  ctx.user = {
    nome: faker.person.fullName(),
    email: faker.internet.email({ provider: 'serverest.dev' }),
    password: 'Senha@123',
    administrador: 'false',
  };
});

When('I request the users list', async () => {
  ctx.response = await serverestApi.listUsers();
});

When('I request the products list', async () => {
  ctx.response = await serverestApi.listProducts();
});

When('I request the carts list', async () => {
  ctx.response = await serverestApi.listCarts();
});

When('I register the user', async () => {
  assert.ok(ctx.user, 'User must be prepared before registration');
  ctx.response = await serverestApi.registerUser(ctx.user);
});

When('I login with that user', async () => {
  assert.ok(ctx.user, 'User must be prepared before login');
  ctx.response = await serverestApi.login({
    email: ctx.user.email,
    password: ctx.user.password,
  });
});

Then('the user response should contain a list of users', () => {
  assert.strictEqual(ctx.response.status, 200);
  assert.ok(Array.isArray(ctx.response.data.usuarios), 'Expected usuarios array in response');
});

Then('the product response should contain a list of products', () => {
  assert.strictEqual(ctx.response.status, 200);
  assert.ok(Array.isArray(ctx.response.data.produtos), 'Expected produtos array in response');
});

Then('the carts response should contain a list of carts', () => {
  assert.strictEqual(ctx.response.status, 200);
  assert.ok(Array.isArray(ctx.response.data.carrinhos), 'Expected carrinhos array in response');
});

Then('the registration is successful', () => {
  assert.strictEqual(ctx.response.status, 201);
  assert.strictEqual(ctx.response.data.message, 'Cadastro realizado com sucesso');
});

Then('I receive an authorization token', () => {
  assert.strictEqual(ctx.response.status, 200);
  assert.ok(ctx.response.data.authorization, 'Expected authorization token from login');
});
