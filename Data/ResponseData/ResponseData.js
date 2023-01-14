module.exports = function ResponseData() {
  return {
    status: true,
    checkin_responses: {
      student: [
        {
          response: "",
          student_checkin_response_data: [],
          checkin_activity_category_details: [
            {
              id: 25,
              name: "I am proud of myself",
              image:
                "https://check-in-activity.s3.ap-south-1.amazonaws.com/proud_girl.png",
              gif_image:
                "https://check-in-activity.s3.ap-south-1.amazonaws.com/proud_girl.gif",
            },
          ],
        },
      ],
      teacher: [
        {
          response: "",
          teacher_checkin_response_data: [],
          checkout_questions: [],
        },
      ],
    },
    checkout_responses: {
      student: [
        {
          response: "",
          student_checkout_response_data: [],
          checkout_activity_category_details: [],
        },
      ],
      teacher: [
        {
          response: "/system/user_checkin_out_activity/response/498/image.png",
          teacher_checkout_response_data: [],
        },
      ],
    },
  };
};
