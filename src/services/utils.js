export const fetch_options = function(method = "GET"){
  return {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "http://localhost:3001",
    },
  }
}
export const URI = "http://localhost:3001/"
