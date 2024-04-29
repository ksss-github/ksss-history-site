import { getAllCategoriesFilter } from '../components/Timeline/filter-utils'; // replace with the actual path to your file

describe('getAllCategoriesFilter', () => {
  it('returns the correct categories', () => {
    const timelineData = [
      { tagIds: ['cat-1', 'cat-2'] },
      { tagIds: ['cat-2', 'cat-3'] },
      { tagIds: ['cat-3', 'cat-4'] },
    ];

    const expectedCategories = [
      { value: 'cat-1', label: 'Cat 1' },
      { value: 'cat-2', label: 'Cat 2' },
      { value: 'cat-3', label: 'Cat 3' },
      { value: 'cat-4', label: 'Cat 4' },
    ];

    const result = getAllCategoriesFilter(timelineData);

    expect(result).toEqual(expectedCategories);
  });
});