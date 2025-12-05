import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Input } from '../ui/input';

export default function Main() {
	return (
		<Card className='p-10'>
			<div className='flex items-center'>
				<Input
					type='number'
					className='w-2/5'
				/>
				<div className='whitespace-nowrap bg-gray-900 text-white px-4'>Está para</div>
				<Input
					type='number'
					className='w-2/5'
				/>
			</div>

			<div className='flex items-center'>
				<Input
					type='number'
					className='w-2/5'
				/>
				<div className='whitespace-nowrap bg-gray-900 text-white px-4'>Está para</div>

				<Button className='w-2/5 h-9 bg-black py-1 px-3 cursor-pointer'>Calcular</Button>
			</div>
		</Card>
	);
}
