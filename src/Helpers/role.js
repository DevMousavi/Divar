// A function to Persianize roles
// It is used in the admin panel

function getRole(role) {
    if (role === "ADMIN") {
        return "مدیر";
    } else if (role === "USER") {
        return "کاربر";
    } else {
        return "نقش نامعتبر";
    }
}

export { getRole };
