const sortByPrice = (allItems) => {
    const newarray = [...allItems];
    return newarray.sort((a, b) => {
        if (a.price < b.price) return -1;
        if (a.price >= b.price) return 1;
        return 0;
    })
}

const sortByName = (allItems) => {
    const newarray = [...allItems];

    return newarray.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title >= b.title) return 1;
        return 0;
    })
};

export { sortByName, sortByPrice };