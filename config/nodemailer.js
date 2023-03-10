import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	host: "smtp.office365.com",
	secure: false,
	port: 587,
	tls: {
		ciphers: "SSLv3"
	},
	service: "outlook",
	auth: {
		user: email,
		pass: pass
	}
});

export const mailOptions = {
	from: email,
	to: email
};
