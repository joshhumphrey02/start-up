import '@smastrom/react-rating/style.css';
import { Rating as ReactRating, Star } from '@smastrom/react-rating';

const myStyles = {
	itemShapes: Star,
	activeFillColor: '#f5c647',
	inactiveFillColor: '#f5c64770',
	maxWidth: 100,
};

interface Props {
	className?: string;
	value: number;
	readOnly?: boolean;
	onChange?: (value: number) => void;
}
export function Rating(props: Props) {
	const { className, value, readOnly, onChange } = props;
	return (
		<ReactRating
			style={{ maxWidth: 100 }}
			className={className}
			value={value}
			readOnly={readOnly ?? true}
			onChange={onChange}
			halfFillMode={'svg'}
			itemStyles={myStyles}
		/>
	);
}
