import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
	return (
		<div className='bg-black min-h-screen w-full flex justify-center items-center'>
			<div>
				<Header />
				<Main />
				<Footer />
			</div>
		</div>
	);
}
