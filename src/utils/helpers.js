function validateEmail(email) {
    var re = /^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{3})$/;
    return re.test(String(email).toLowerCase());
}

export default validateEmail;
