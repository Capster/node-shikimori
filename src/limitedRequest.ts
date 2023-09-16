import { BASE_URL } from "./constants";
import { ShikimoriError } from "./ShikimoriError";

export const request = async (path: string, options: RequestInit) => {
  const url = new URL(path, BASE_URL);
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new ShikimoriError('Bad response', response);
  }
  const text = await response.text();
  if (text) {
    return JSON.parse(text);
  }
};

const MILLISECONDS_IN_SECOND = 1_000;
const MILLISECONDS_IN_MINUTE = MILLISECONDS_IN_SECOND * 60;

export const limitedRequest = (maxCallsPerSecond: number, maxCallsPerMinute: number) => {
  let secondFetchCount = 0;
  let minuteFetchCount = 0;
  let secondStart = Date.now();
  let minuteStart = Date.now();

  return (path: string, options: RequestInit) => {
    const now = Date.now();

    if (now - secondStart >= MILLISECONDS_IN_SECOND) {
      secondFetchCount = 0;
      secondStart = now;
    }

    if (now - minuteStart >= MILLISECONDS_IN_MINUTE) {
      minuteFetchCount = 0;
      minuteStart = now;
    }

    secondFetchCount++;
    minuteFetchCount++;

    if (secondFetchCount > maxCallsPerSecond) {
      throw new ShikimoriError('Maximum fetch requests per second exceeded', null);
    }

    if (minuteFetchCount > maxCallsPerMinute) {
      throw new ShikimoriError('Maximum fetch requests per minute exceeded', null);
    }

    return request(path, options)
  }
}
