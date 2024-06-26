// Description: This file contains utility functions for the filter mobile and desktop component.
export function getAllCategoriesFilter(timelineData) {
  let categoriesSet = new Set(
    timelineData.reduce((acc, event) => acc.concat(event.tagIds), [])
  );
  let categoriesArray = Array.from(categoriesSet).sort();
  categoriesArray = categoriesArray.map((cat) => {
    let words = cat.replace(/-/g, " ").split(" ");
    words = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
    return { value: cat, label: words.join(" ") };
  });
  return categoriesArray;
}

export function getAllDecadesFilter(timelineData, categoriesToFilter) {
  let filteredCategories = timelineData.filter((event) =>
    event.tagIds.some((tagId) => categoriesToFilter.includes(tagId))
  );
  let allYearsSet = new Set(
    filteredCategories.map((event) => event.date.slice(0, 4))
  );
  let allDecadesArray = Array.from(allYearsSet).sort();
  let allDecadesSet = new Set();
  allDecadesArray.forEach((year) => {
    let startDecade = Math.floor(year / 10) * 10;
    let endDecade = startDecade + 10;
    allDecadesSet.add(startDecade);
    allDecadesSet.add(endDecade);
  });
  allDecadesArray = Array.from(allDecadesSet);
  return allDecadesArray;
}

export function handleFilterChange(e, setCategoriesToFilter, categoriesToFilter){
  const value = e.target.value;

  if (value === "main") {
    setCategoriesToFilter(["main"]);
  } else {
    if (categoriesToFilter.includes(value)) {
      // If the checkbox is already checked, uncheck it
      const newCategory = categoriesToFilter.filter((cat) => cat !== value);
      // If unchecking this checkbox leaves no other checkboxes checked, check 'main'
      if (newCategory.length === 0) {
        setCategoriesToFilter(["main"]);
      } else {
        setCategoriesToFilter(newCategory);
      }
    } else {
      // If the checkbox is not checked, check it and uncheck 'main'
      setCategoriesToFilter(
        categoriesToFilter.filter((cat) => cat !== "main").concat(value)
      );
    }
  }
};