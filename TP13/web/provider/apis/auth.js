var auth = {
  async getme() {
    const res = await fetch("http://localhost:3001/me", {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-type": "application/json",
        Origin: "http://localhost:3000", //optional for the default it can get directly
      },
    });
    const result = await res.json();
    if (result?.success == false) {
      return false;
    }
    return result;
  },
};

export default auth;
