'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function CardRule() {
	const [inputA, setInputA] = useState<string>('');
	const [inputB, setInputB] = useState<string>('');
	const [inputC, setInputC] = useState<string>('');
	const [result, setResult] = useState<string>('Resultado');
	const [isHovered, setIsHovered] = useState<boolean>(false);

	const copyTextButton = async () => {
		if (result !== 'Resultado') {
			try {
				await navigator.clipboard.writeText(result);
				setResult('Copiado!');
				setTimeout(() => {
					setResult(((Number(inputB) * Number(inputC)) / Number(inputA)).toFixed(2));
				}, 1000);
			} catch (err) {
				console.error('Falha ao copiar texto: ', err);
				setResult('Erro ao Copiar!');
				setTimeout(() => {
					setResult('Resultado');
				}, 2000);
			}
		}
	};

	useEffect(() => {
		if (!inputA || !inputB || !inputC) {
			setResult('Resultado');
		} else {
			setResult(((Number(inputB) * Number(inputC)) / Number(inputA)).toFixed(2));
		}
	}, [inputA, inputB, inputC]);
	return (
		<div className='bg-white border-none p-4 w-11/12 sm:p-10 sm:w-full'>
			<div className='flex items-center'>
				<Input
					type='number'
					className='flex-1 text-center border-2 border-gray-900 focus-visible:border-gray-500'
					placeholder='A'
					onChange={(e) => setInputA(e.target.value)}
					value={inputA}
				/>

				<div className='whitespace-nowrap bg-gray-900 text-white px-4'>Está para</div>

				<Input
					type='number'
					className='flex-1 text-center border-2 border-gray-900'
					placeholder='B'
					onChange={(e) => setInputB(e.target.value)}
					value={inputB}
				/>
			</div>

			<div className='flex items-center'>
				<Input
					type='number'
					className='flex-1 text-center border-2 border-gray-900'
					placeholder='C'
					onChange={(e) => setInputC(e.target.value)}
					value={inputC}
				/>

				<div className='whitespace-nowrap bg-gray-700 text-white px-4'>Está para</div>

				<Button
					className='flex-1 w-full h-9 bg-gray-900 py-1 px-3 cursor-pointer box-border overflow-hidden  hover:bg-gray-700'
					onClick={copyTextButton}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{isHovered && result !== null ? 'Copiar' : result === null ? 'Resultado' : result}
					{''}
				</Button>
			</div>
		</div>
	);
}
