import * as styles from "../../styles/modules/forms/QuickContact.module.scss";
import { useState } from "react";
import FormBtn from "../interactives/FormBtn";

import {
	FormControl,
	FormLabel,
	Input,
	Textarea,
	FormErrorMessage,
	Text,
	useToast,
	Button,
	InputLeftAddon,
	InputGroup,
	InputRightAddon
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
			<h2 className="font-semibold">Quick Contact</h2>
			<h4>
				When curiosity strikes, grab the opportunity and message us for more
				details!
			</h4>
			<br />

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
				<FormErrorMessage>Name is Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.email && !values.email}
				mb={10}
			>
				<FormLabel>Email Address</FormLabel>
				<InputGroup>
					<Input
						type="email"
						name="email"
						value={values.email}
						onChange={handleChange}
						onBlur={onBlur}
					/>
				</InputGroup>

				<FormErrorMessage>Email Address is Required</FormErrorMessage>
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
				<FormErrorMessage>Business name is Required</FormErrorMessage>
			</FormControl>

			<FormControl
				isRequired
				isInvalid={touched.phone && !values.phone}
				mb={10}
			>
				<FormLabel>Phone or Contact</FormLabel>
				<Input
					type="tel"
					name="phone"
					value={values.phone}
					onChange={handleChange}
					onBlur={onBlur}
				/>
				<FormErrorMessage>Phone is Required</FormErrorMessage>
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
				<FormErrorMessage>Comment is Required</FormErrorMessage>
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
				// onClick={onSubmit}
				type="submit"
			>
				Submit
			</Button>

			{/* <Box
				disabled={
					!values.name ||
					!values.email ||
					!values.business ||
					!values.phone ||
					!values.comment
				}
				isLoading={isLoading}
				onClick={onSubmit}
				as="button"
				color="#000000"
				bg="#FFDB19"
				px="20px"
				py="15px"
				fontWeight="semibold"
				cursor="pointer"
			>
				Build your dream team now!
			</Box> */}
		</form>
	);
}
