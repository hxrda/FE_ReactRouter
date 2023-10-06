import { useRouteError } from "react-router-dom";

export default function Error() {
	const error = useRouteError();
	console.log(error); //console displays the full contents of the error object

	return (
		<div>
			<h1>Page not found</h1>
			<p>{error.data}</p>
		</div>
	);
}
