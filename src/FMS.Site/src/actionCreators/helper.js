export const handleErrors = (response) => {
    if (response.status >= 400) {
        throw new Error(response.statusText);
    }
    return response;
};

