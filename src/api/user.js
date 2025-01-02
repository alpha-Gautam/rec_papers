import { server } from "../serve";

const url = "api/v1/";

export function updateUserConfiguration(data) {
  return server.post(url + "user_configuration", data);
}

export function getUserQuestions() {
  console.log("debug getUserQuestions");
  return server.post(url + "get_user_questions", {});
}

export function getUserRecentQuestions(filter, page_no) {
  return server.post(url + "get_user_recent_questions", {filter:filter, page_no:page_no});
}

export function saveUserQuestionsNotes(text, question_id, user_id) {
  console.log("debug saveUserQuestionsNotes")
  return server.post(url + "save_notes_user_questions", {text: text,  user_id:user_id, question_id:question_id})
}
