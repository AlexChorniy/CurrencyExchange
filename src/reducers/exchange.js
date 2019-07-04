export default (initialState = 1, { type }) => {
    switch (type) {
        case 'COUNTER':
            return initialState + 2;
        default:
            return initialState;
    }
};
