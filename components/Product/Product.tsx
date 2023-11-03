import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = motion(forwardRef(({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const variants = {
		visible: { opacity: 1, height: 'auto' },
		hidden: { opacity: 0, height: 0 }
	};

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
		reviewRef.current?.focus();
	};

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				{/* <div className={styles.title}>{product.title}</div> */}
				<div className={styles.title}>Title of course</div>
				<div className={styles.price}>
					<span><span className="visualyHidden">price</span>{priceRu(product.price)}</span>
					{product.oldPrice && <Tag className={styles.oldPrice} color="green">
						<span className="visualyHidden">discount</span>
						{priceRu(product.price - product.oldPrice)}
					</Tag>}
				</div>
				<div className={styles.credit}>
					<span className="visualyHidden">credit</span>
					{priceRu(product.credit)}/<span className={styles.month}>months</span>
				</div>
				<div className={styles.rating}>
					<span className="visualyHidden">{'rating' + (product.reviewAvg ?? product.initialRating)}</span>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
				<div className={styles.priceTitle} aria-hidden={true}>price</div>
				<div className={styles.creditTitle} aria-hidden={true}>credit</div>
				<div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['review', 'review', 'reviews'])}</a></div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{/* {product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))} */}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Advantages</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Disadvantages</div>
						<div>{product.disadvantages}</div>
					</div>}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button appearance='primary'>Find out more</Button>
					<Button
						appearance='ghost'
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
						aria-expanded={isReviewOpened}
					>Read reviews</Button>
				</div>
			</Card>
			<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
				<Card color='blue' className={styles.reviews} ref={reviewRef} tabIndex={isReviewOpened ? 0 : -1}>
					{product.reviews.map(r => (
						<div key={r._id}>
							<Review review={r} />
							<Divider />
						</div>
					))}
					<ReviewForm productId={product._id} isOpened={isReviewOpened} />
				</Card>
			</motion.div>
		</div>
	);
}));