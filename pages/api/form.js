export default function handler(req, res) {
	const body = req.body;

	console.log("body: ", body);

	if (
		!body.name ||
		!body.email ||
		!body.business ||
		!body.phone ||
		!body.comment
	) {
		return res.status(400).json({ data: "Details not found" });
	}

	res.status(200).json({
		data: `${body.name}, ${body.email}, ${body.business}, ${body.phone}, ${body.comment} `
	});
}
