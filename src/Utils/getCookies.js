const getCookies = (tokenName) => {
    const cookies = document.cookie.split(";");
    for (const item of cookies) {
        const [key, value] = item.trim().split("=");
        if (key === tokenName) {
            return value;
        }
    }
    return false;
};

export { getCookies };
