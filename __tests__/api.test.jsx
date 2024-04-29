import { createClient } from '@sanity/client';
import { getTimeline } from '../sanity/sanity-utils';

jest.mock('@sanity/client');

describe('getTimeline', () => {
  it('fetches timeline from Sanity', async () => {

    const mockFetch = jest.fn().mockResolvedValue([]);
    createClient.mockReturnValue({ fetch: mockFetch });

    const result = await getTimeline();

    expect(createClient).toBeCalled();
    expect(mockFetch).toBeCalled();
    expect(result).toEqual([]);
  });

  it('returns an empty array when an error occurs', async () => {

    const mockFetch = jest.fn().mockRejectedValue(new Error('Error'));
    createClient.mockReturnValue({ fetch: mockFetch });

    const result = await getTimeline();

    expect(createClient).toBeCalled();
    expect(mockFetch).toBeCalled();
    expect(result).toEqual([]);
  });
});