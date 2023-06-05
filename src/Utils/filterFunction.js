export const filtersHandler = (filters, products) => {
    const { searchValue, checkboxes, priceRange, sortBy  } = filters;
    let newData = products;
    newData = searchValue.trim().length > 0 ? newData.filter(({title}) => title.toLowerCase().includes(searchValue.trim().toLowerCase())) : newData;
    newData = priceRange ? newData.filter(({price}) => price <= parseInt(priceRange)) : newData;
    newData = sortBy ? newData.sort((a,b) => sortBy === 'highToLow' ? b.price - a.price : a.price - b.price) : newData;
    return newData;
}