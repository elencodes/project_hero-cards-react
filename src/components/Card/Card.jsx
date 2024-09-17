import "./Card.css";
import data from "../../data/data.json";

export function Card() {
	return (
		<>
			{data.map((card) => {
				return (
					<div className="card" key={card.id}>
						<h2 className="subtitle">{card.name}</h2>
						<p>
							<strong>Вселенная: </strong>
							{card.universe}
						</p>
						<p>
							<strong>Альтер эго: </strong>
							{card.alterego}
						</p>
						<p>
							<strong>Род деятельности: </strong>
							{card.occupation}
						</p>
						<p>
							<strong>Друзья: </strong>
							{card.friends}
						</p>
						<p>
							<strong>Суперсилы: </strong>
							{card.superpowers}
						</p>
						<div className="image">
							<img src={card.url} alt="картинка супергероя" />
						</div>
						<p className="text">{card.info}</p>
					</div>
				);
			})}
		</>
	);
}
