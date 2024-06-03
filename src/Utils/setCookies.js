const setCookies = (tokenName, tokenValue) => {
    if (tokenName === "accessToken") {
        document.cookie = `${tokenName}=${tokenValue} ;max-age=${44}`;
    } else if (tokenName === "refreshToken") {
        document.cookie = `${tokenName}=${tokenValue} ;max-age=${
            29 * 24 * 60 * 60
        }`;
    } else {
        return {
            message: `No Commands Have Been Placed For This ${tokenName}`,
        };
    }
};

export { setCookies };
