const key = 'Currency';

const workWithLS = {
    getData() {
        try {
            const serializedState = localStorage.getItem(key);
            if (serializedState === null) {
                return undefined;
            }
            return JSON.parse(serializedState);
        } catch (error) {
            return undefined;
        }
    },
    setData(value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            // Ignore write errors
        }
    },
};

export default workWithLS;
