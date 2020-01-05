function generateError(message: string, code: number) {
  throw {
    message,
    errorCode: code
  };
}

generateError("Error occured", 500);
