export const getData = async (url) => {
    const response = fetch(url);
    return (await response).json();
}