import expressAsync from "express-async-handler";
import contractingEmail from "../emailTemplates/contractingEmail.js";
import sendEmail from "../utils/sendNodeMail.js";

/**
 * @desc: Request a contracts
 * @route: POST /api/contracting
 * @access: Private
 */

const requestContractController = expressAsync((req, res, next) => {
  const mailContent = contractingEmail({
    name:
      req.body.lastName +
      ", " +
      req.body.firstName +
      " " +
      (req.body.middleName ?? ""),
    state: req.body.state,
    email: req.body.email,
    remarks: req.body.remarks,
    phoneNumber: req.body.phoneNumber,
    licenseNumber: req.body.licenseNumber,
    ssnNumber: req.body.ssnNumber,
    carrier: req.body.carrier,
    dateOfBirth: req.body.dateOfBirth,
  });

  let sendHTMLEmail;

  const mailSubject = "New Contract Request";
  const mailAttachments = [
    {
      // file on disk as an attachment
      filename: "license-image.png",
      path: req.file?.path, // stream this file
      cid: req.file?.path,
    },
  ];

  try {
    sendHTMLEmail = sendEmail(
      req.body.email,
      mailSubject,
      mailContent,
      mailAttachments
    )
      .then((request, response) => {
        response?.send("[Request Contract] has been successfully submitted.") ??
          "";
      })
      .catch((error) => {
        res.status(500);
        console.log(error);
        throw new Error("Error occured in submission.");
      });

    res.send(sendHTMLEmail);
  } catch (error) {
    res.status(500);
    console.log(error);
    throw new Error("Error occured in submission.");
  }
});

export { requestContractController };