import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import GlassIcon from './glass.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { useState, KeyboardEvent, useEffect } from 'react';
// import { useRouter}, Router from 'next/router';
import Router, { useRouter} from 'next/router';

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {
	const [search, setSearch] = useState<string>('');
	const router = useRouter();

	// useEffect(() => {
  //   Router.push('/search');
  // }, []);

	const goToSearch = (e: React.FormEvent) => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
		// Router.push('/search');
		e.preventDefault();
		// router.push({
		// 	pathname: '/testttt',
		// 	query: {
		// 		q: search
		// 	}
		// });
	};

	// const handleKeyDown = (e: KeyboardEvent) => {
	// 	if (e.key == 'Enter') {
	// 		goToSearch();
	// 	}
	// };

	return (
		<form onSubmit={goToSearch} className={cn(className, styles.search)} {...props} role="search">
			<Input
				className={styles.input}
				placeholder="Search..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				// onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={goToSearch}
				aria-label="Search the site"
			>
				<GlassIcon />
			</Button>
		</form>
	);
};