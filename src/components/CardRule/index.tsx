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
				}, 1500);
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
		<div className='w-11/12 flex flex-col gap-4'>
			<div className='flex items-center'>
				<Input
					type='number'
					className='flex-1 text-center border text-white bg-white/5  border-white/10 placeholder:text-white/10 px-2 py-5 focus-visible:ring-0'
					placeholder='A'
					onChange={(e) => setInputA(e.target.value)}
					value={inputA}
				/>

				<div className='whitespace-nowrap bg-white/20 text-white px-4'>Está para</div>

				<Input
					type='number'
					className='flex-1 text-center border text-white bg-white/5 border-white/10 placeholder:text-white/10 px-2 py-5 focus-visible:ring-0'
					placeholder='B'
					onChange={(e) => setInputB(e.target.value)}
					value={inputB}
				/>
			</div>
			<div className='flex items-center'>
				<Input
					type='number'
					className='flex-1 text-center border text-white bg-white/5  border-white/10 placeholder:text-white/10 px-2 py-5 focus-visible:ring-0'
					placeholder='C'
					onChange={(e) => setInputC(e.target.value)}
					value={inputC}
				/>

				<div className='whitespace-nowrap bg-white/40 text-white px-4 '>Está para</div>

				<Button
					className='flex-1 w-full h-9 bg-white/5 py-5 px-2 cursor-pointer box-border overflow-hidden border text-white border-white/10  hover:bg-white/10 transition'
					onClick={copyTextButton}
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}>
					{isHovered &&
					result !== null &&
					result !== 'Resultado' &&
					result !== 'Copiado!' &&
					result !== 'Erro ao Copiar!'
						? 'Copiar'
						: result === null
						? 'Resultado'
						: result}
					{''}
				</Button>
			</div>
		</div>
	);
}
