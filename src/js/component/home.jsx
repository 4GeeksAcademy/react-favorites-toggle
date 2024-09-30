import React, {useState} from "react";


//create your first component
const Home = () => {
	const [favorited, setFavorited] = useState(false)

	const handleFavorites = (e) => {
		e.preventDefault();
		if(favorited == true) {
			setFavorited(false);
		}
		else if(favorited == false) {
			setFavorited(true)
		}
	}
	return (
		<div className="my-5">
			<div className="card mx-auto" style={{"width": "18rem"}}>
				<img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScUqzU0YKUJdmd_eMXHl-k7-1eh0DrLM3Fi0hXjZOm_CmXNAs5ZzpnxYVT1-nrUhZveOtTa1qTvsVdToGuS0oYGg73aZLcH5p9tS_OyA" className="card-img-top" alt="..."/>
				<div className="card-body">
					<h5 className="card-title">Cutest Squirt in all the Galaxy</h5>
					<p className="card-text">**do not leave unattended around frogs</p>
					<span className={favorited == true ? "glow" : ""}><span className="heart" onClick={(e) => handleFavorites(e)}></span></span>
				</div>
			</div>
		</div>
	);
};

export default Home;
