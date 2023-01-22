module.exports = function ResponseData() {
  return  {
    "status": true,
    "checkin_responses": {
        "student": [],
        "teacher": [
            {
                "response": "",
                "teacher_checkin_response_data": [],
                "checkout_questions": []
            }
        ]
    },
    "checkout_responses": {
        "student": [],
        "teacher": [
            {
                "response": "",
                "teacher_checkout_response_data": []
            }
        ]
    }
}
};
