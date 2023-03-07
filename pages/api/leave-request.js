const sgMail = require("@sendgrid/mail");

const { NEXT_SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(NEXT_SENDGRID_API_KEY);

export default async function leaveRequest(req, res) {
  const { userName, course, userPhone } = req.body;
  if (course) {
    const data = {
      to: "mark.nelovka@gmail.com",
      from: "mdima4266@gmail.com",
      subject: "New one",
      text: `Привет, меня зовут ${userName}. Заинтересовал ${course}. Перезвоните мне, пожалуйста, по номеру: ${userPhone}`,
    };
    try {
      await sgMail.send(data);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Request success sended",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Ooops, something is wrong",
      });
    }
  } else {
    const data = {
      to: "mark.nelovka@gmail.com",
      from: "mdima4266@gmail.com",
      subject: "New one",
      text: `Привет, меня зовут ${userName} я хочу работать с вами. Вот мой номер телефона: ${userPhone}, перезвоните мне пожалуйста`,
    };
    try {
      await sgMail.send(data);
      return res.status(200).json({
        code: 200,
        status: "success",
        message: "Request success sended",
      });
    } catch (error) {
      return res.status(500).json({
        code: 500,
        status: "error",
        message: "Ooops, something is wrong",
      });
    }
  }
}
