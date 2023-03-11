// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: "priem-cloud",
  api_key: "364718338389339",
  api_secret: "em08MXmgez-tp4GfU2pItEHMQc4",
});
export default async function handler(req, res) {
  let data = null;
  await cloudinary.v2.api.resources(
    {
      type: "upload",
      prefix: ["partners/"],
      resource_type: "image",
    },
    function (error, result) {
      if (error) {
        data = {
          code: 404,
          status: "error",
          data: null,
        };
      } else {
        data = result;
      }
    }
  );
  if (data)
    return res.json({
      data,
    });
}
