import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Error.module.css';
import style from './style.css'
const Error = () => {
  return (
<div class="background-img">
		<div class="space"></div>
			<div class="wrapper">
				<div class="img-wrapper">
					<span>44</span>
				</div>
				<p>The page you are trying to search has been moved to another universe.</p>
      <Link to="/home" className={styles['home-link']}>
				<button type="button">GO HOME</button>
      </Link>
			</div>
        
		</div>
  );
};

export default Error;
