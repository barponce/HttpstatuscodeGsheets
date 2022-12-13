function httpstatuscode(uri) {
    let response_code;
    let params = {
      'followRedirects': false
    }
    try {
        response_code = UrlFetchApp.fetch(uri, params).getResponseCode().toString();
    } catch (error) {
        response_code = error.toString().match(/ returned code (\d\d\d)\./)[1];
    } finally {
        return response_code;
    }
}
