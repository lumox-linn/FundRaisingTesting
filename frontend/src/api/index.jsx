const BASE_URL = "http://127.0.0.1:5000";

export async function apiLogin(data) {
  const res = await fetch(`${BASE_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  return {
    status: res.ok ? "success" : "fail",
    message: result.message,
  };
}

export async function apiRegister() {
  return {
    status: "fail",
    message: "Register not added yet",
  };
}

export async function apiSendCode() {
  return {
    status: "fail",
    message: "Send code not added yet",
  };
}