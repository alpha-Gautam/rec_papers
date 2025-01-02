// import { isLogin } from "../api/login";

// Function to set a cookie
export function setCookie(name, value, milliseconds) {
  let expires = "";
  if (milliseconds) {
    const date = new Date();
    date.setTime(date.getTime() + milliseconds);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
export function getCookie(name) {
  const cookieName = name + "=";
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(cookieName)) {
      return cookie.substring(cookieName.length);
    }
  }

  return null;
}

export function removeCookie(name) {
  document.cookie = name + "=; Max-Age=-99999999;";
}

export async function checkIsLoggedIn() {
  return false;
}
