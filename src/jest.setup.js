import "@testing-library/jest-dom/extend-expect";
import { enableFetchMocks } from "jest-fetch-mock";
import { server } from "mocks/server";

enableFetchMocks();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
