import React from 'react';
import './footer.css';

function Footer(props){
    return(
<div className="footer container-fluid text-center">
<a href="http://facebook.com/bkbees/"><i className="fab fa-facebook-square social"/></a><a href="http://youtube.com/bkbees"><i className="fab fa-youtube social"></i></a>
<p>
    Copyright &copy; 2019 B&K Bees<br/><span className="credit">This Site Was Designed By <a href="http://www.bkbeesites.com">www.bkbeesites.com</a></span>
</p>
</div>
    );
}

export default Footer;