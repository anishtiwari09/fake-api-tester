function CheckoutData() {
  return {
    status: true,
    student_activity_data: [
      {
        student_checkin_activity_id: 277,
        checkin_out_activity_id: 46,
        response: "/system/user_checkin_out_activity/response/277/image.png",
        gif_image: "",
        checkin_out_activity_category_id: "",
        selected_checkin_name: "",
        selected_checkin_path: "",
      },
    ],
    activity_id: 47,
    name: "Shape",
    category: "Circle & Rectangle",
    total_count: 5,
    instruction:
      "At the beginning of the session you did a great job by drawing so creatively. There is something that I would want to draw for you, as we end the session. Hope you like it!",
    teacher_instruction1: null,
    student_instruction: null,
    activity_data: [
      {
        category_id: 109,
        name: "Circle",
        image: "https://check-in-activity.s3.ap-south-1.amazonaws.com/circle.png",
        gif_image: null,
        story_question_data: [],
        count: 3,
      },
      {
        category_id: 110,
        name: "Rectangle",
        image:
          "https://check-in-activity.s3.ap-south-1.amazonaws.com/rectangle.png",
        gif_image: null,
        story_question_data: [],
        count: 2,
      },
    ],
    message: "Checkin Activity sent successfully",
  }
}

module.exports = CheckoutData;
