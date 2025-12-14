import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
	return (
		<div className='bg-black min-h-screen w-full flex justify-center flex-col items-center'>
			<Header />
			<div className='h-px w-4/5 md:w-2/3 lg:w-1/2 2xl:w-2/5 bg-white/10 mb-5 text-center'></div>
			<Main />
			<Footer />
		</div>
	);
}
