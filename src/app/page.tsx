import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
	return (
		<div className='bg-black min-h-screen w-full flex justify-center flex-col items-center'>
			<Header />
			<div className='h-px w-3/4 bg-white/10 mb-5 text-center'></div>
			<Main />
			<Footer />
		</div>
	);
}
