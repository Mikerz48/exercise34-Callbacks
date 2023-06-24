function printAsyncName (callback, string) {
    return setInterval(callback, 1000);
    return setInterval(string, 2000);
}

printAsyncName(() => console.log("Hello", "string"))
