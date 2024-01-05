import { describe, expect, test } from '@jest/globals';
import { client } from '../src/client';

describe('animes', () => {
  const api = client();

  test('list anime', async () => {
    const animes = await api.animes.list({});
    const first = animes[0];
    expect(first).toHaveProperty('name');
  });

  test('list top 5 anime', async () => {
    const animes = await api.animes.list({
      limit: 5,
      order: 'ranked',
    });
    expect(animes).toHaveLength(5);
  });
});
