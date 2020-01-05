function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("Error occured", 500);
