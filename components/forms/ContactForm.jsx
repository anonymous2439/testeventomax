import * as styles from "../../styles/modules/forms/ContactForm.module.scss";
import { useState } from "react";

import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	FormErrorMessage,
	Button,
	Text,
	useToast
} from "@chakra-ui/react";
import { sendContactForm } from "../../lib/api";

const initValues = {
	name: "",
	email: "",
	business: "",
	phone: "",
	comment: ""
};

const initState = { values: initValues };

export default function QuickContact() {
	const toast = useToast();

	const [state, setState] = useState(initState);
	const [touched, setTouched] = useState({});

	const { values, isLoading, error } = state;

	const onBlur = ({ target }) => {
		setTouched(prev => ({ ...prev, [target.name]: true }));
	};

	const handleChange = ({ target }) => {
		setState(prev => ({
			...prev,
			values: {
				...prev.values,
				[target.name]: target.value
			}
		}));
	};

	const onSubmit = async () => {
		setState(prev => ({
			...prev,
			isLoading: true
		}));

		try {
			await sendContactForm(values);
			setTouched({});
			setState(initState);
			toast({
				title: "Message has been sent.",
				status: "success",
				duration: 2000,
				position: "top"
			});
		} catch (error) {
			setState(prev => ({
				...prev,
				isLoading: false,
				terror: error.message
			}));
		}
	};

	return (
		<form className={styles.quickContactWrapper} data-netlify="true" method="POST" name="contact">
			<input type="hidden" name="form-name" value="contact" />
			<input type="hidden" name="subject" value="Inquiry from https://www.eventomax.com/" />
			{error && (
				<Text color="red.300" my={4} fontSize="xl">
					{error}
				</Text>
			)}
			<FormControl isRequired isInvalid={touched.name && !values.name} mb={10}>
				<FormLabel>Name</FormLabel>
				<Input
					type="text"
					name="name"
					errorBorderColor="red.300"
					value={values.name}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.email && !values.email}
				mb={10}
			>
				<FormLabel>Email Address</FormLabel>
				<Input
					type="email"
					name="email"
					value={values.email}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.business && !values.business}
				mb={10}
			>
				<FormLabel>Business name and type of business</FormLabel>
				<Input
					type="text"
					name="business"
					value={values.business}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.phone && !values.phone}
				mb={10}
			>
				<FormLabel>Phone or Contact</FormLabel>
				<Input
					type="number"
					name="phone"
					value={values.phone}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.comment && !values.comment}
				mb={10}
			>
				<FormLabel>Tell us about your company</FormLabel>
				<Textarea
					type="text"
					name="comment"
					rows={4}
					value={values.comment}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Required</FormErrorMessage>
			</FormControl>

			<Button
				variant="outline"
				color="black"
				bg="#FFDB19"
				borderColor="#ffdb19"
				borderRadius={0}
				p={8}
				_hover={{ bg: "white", color: "#ffdb19" }}
				disabled={
					!values.name ||
					!values.email ||
					!values.business ||
					!values.phone ||
					!values.comment
				}
				isLoading={isLoading}
				onClick={onSubmit}
			>
				Submit
			</Button>
		</form>
	);
}
