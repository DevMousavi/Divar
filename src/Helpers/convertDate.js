const convertDate = (isoDate) => {
    const date = new Date(isoDate);
    const now = new Date();

    const diffInMilliseconds = now - date;
    const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

    if (diffInHours < 24) {
        return `${diffInHours} ساعت پیش`;
    } else {
        return `${diffInDays} روز پیش`;
    }
};

export { convertDate };
