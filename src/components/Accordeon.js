import React from 'react'
import { useSpring, animated } from 'react-spring'
import Deck from './Deck.js';
import { Link, scroller } from "react-scroll";

const cowboys = [
	{
		image: '/images/avatars/anabel-min.png',
		title: 'Анабель Дилижанс',
		description: 'Тяжёлое детство в одиночестве научило маленькую Анабель, что надеяться она может только на себя. Довольно рано девочка заметила, что собирает на себе кучу взглядов, стоит ей только показаться. В сочетании с острым умом и бурной фантазией, ее красота дала невероятные плоды — некогда одинокая девочка стала вращаться в высоких кругах. Она потеряла счет поклонникам, но не своим долларам во всех банках западного побережья. Садясь за стол, Прекрасная Анабель осторожничает и хочет узнать оппонентов получше. Чтобы выиграть не всегда ведь нужно хорошо играть, верно?',
		power: '«Гроза в глазах» — Анабель меняется местами на карте с ближайшим оппонентом.'
	},
	{
		image: '/images/avatars/garri-min.png',
		title: 'Дикий Гарри',
		description: 'Сын шерифа города Сан-Франциско, потому с самого детства прекрасно орудует отцовским револьвером. За свою жизнь он пролил много крови. Но убивал он не только пулей, ходили слухи как он голыми руками завалил напавшую на него медведицу. После стал на военную службу и участвовал в опасных атаках, что развязало ему руки для насилия. Однако тяжёлое ранение отправило стрелка в отставку и заставило Гарри искать жизненную энергию и согревающий азарт в чем-то более спокойном и Дикий, как запад, Гарри сел за карточный стол. Трудно сказать, что у него на уме.',
		power: '«Пушечное мясо» — отбрасывает мощным взрывом лидера(-ов) оппонента на 2 клетки назад.'
	},
	{
		image: '/images/avatars/Cactus-min.png',
		title: 'Кактус Джек',
		description: 'Родился в Хьюстоне, штат Техас, и долгие годы занимался перегоном скота, вплоть до момента, когда его отец спутал все карты — он умер от туберкулеза. Вскоре ранчо совсем опустело, и Джек поехал за солнцем. В пути он неоднократно прибивался к бандитам, но его быстро выгоняли после первого провала. К нему прилипла репутация неудачника, пока в одном из салунов города Эль-Пасо он не вдохновился книгой Одержимого Дейва и не задумал создать вестрерн-парк на своём ранчо. Свой мир под звездами занял все мысли Джека, и он искал способ быстро разбогатеть, и решение нашлось в том же салуне. Доберётся ли он до дома, и как дальше сложится его судьба?',
		power: '«От топота копыт» — до конца хода лошадь Джека скачет в два раза быстрее.'
	},
	{
		image: '/images/avatars/deyv-min.png',
		title: 'Одержимый Дейв',
		description: 'Посвятил свою жизнь игре на скрипке и объехал со своей группой всей штаты. Он всегда рассказывал столько увлекательных историй, что их хватило на целую книгу. Кто же мог знать, что Дейв потеряет голову от концертов и его новой страстью станут доллары? С тех пор состояние Дейва лишь приумножалась, и он решил испытать свою удачу в чем-то более рискованном. Свое прозвище он получил за любовь к очееень большим ставкам!',
		power: '«Везде успеть» — вся команда Дейва переходит на клетку вперёд.'
	},		
	{
		image: '/images/avatars/pekos-min.png',
		title: 'Пекос Билл',
		description: 'До сих пор не ясно кто такой Пекос Билл. В Эль-Пасо он появился из тучи пыли и в первый же день оседлал самого бешеного скакуна. Вокруг него собрано много легенд: говорят в прошлом он оседлал пантеру, а некоторых салунах утверждают, что однажды он заарканил и оседлал ураган, но никто не спорит что его воспитали койоты, после одного случая... Столько всего еще вскроется о жизни Билла во время игры.',
		power: '«Горящее лассо» — метким броском перехватывает карту оппонента и забирает ее себе'
	},			
]

const cyborgs = [
	{
		image: '/images/avatars/tarakan-min.png',
		title: 'Джерри-таракан',
		description: 'Джерри был военным еще до технологической революции, где в одной из операций выжил после падения вертолёта, однако, из-за ожогов потерял все конечности. Его жизнь казалась ему неполноценной, и, мастерски играя в онлайн-покер, он смог накопить себе на новенький экзо-скелет с шестью лапами из титанового сплава. Теперь, имея возможность подбросить грузовик в воздух одной из шести рук и ползая по любым поверхностям, Джерри-Таракан стал супер-оружием армии киборгов.',
		power: '«В будущее. Без вас!» — Джерри расставляет все лапы в непроходимый для пешего соперника барьер, но и сам остаётся на старой клетке до начала следующего хода.'
	},
	{
		image: '/images/avatars/doktor-min.png',
		title: 'Доктор Мерлин',
		description: 'Знаменитый хирург-трансплантолог с получением доступа к новым технологиям стал заниматься пересадкой искусственных частей тела. Работает на армию, выполняя тех-обслуживание и обновление программного обеспечения солдат, а в свободное время занимается разработкой собственного, полностью искусственного разума. Сам Мерлин имеет практически полностью человеческое тело, за исключением коры головного мозга собственного производства, которая позволяет в разы увеличить его производительность.',
		power: '«Наука в действии» — Запускает программу, которая позволяет каждому киборгу в течение хода проходить столько же клеток сколько пройдут его союзники. Купил один - прошли все.'
	},
	{
		image: '/images/avatars/yaponochka-min.png',
		title: 'Мизэки Фудзимот',
		description: 'Родилась после технической революции в Нагасаки в очень бедной семье, которая не могла себе позволить использование кибер-органов, что очень ограничивало возможности Мизэки. Она завидовала своим сверстникам, которые не воспринимали её как полноценного члена общества. Уже в 15 лет она поступила в Киотский университет и в 19 окончила его с отличием. До начала войны она занимала пост технического директора в BioDigit Inc. – крупнейшей в США корпорации, производящей искусственные тела. Руководит производством и поставкой солдат для армии. Мизэки иногда использует для безопасности бионическую копию себя, которой полностью управляет.',
		power: '«バランス回復 (баланс восстановлен)» — отменяет две последние использованные способности.'
	},
	{
		image: '/images/avatars/Koyot-min.png',
		title: 'Койот Хотото',
		description: 'Хотото родился в семье коренных индейцев-апачей, занимавших свободные территории на западе. Ковбои убили его семью, взяли его в плен и заставили работать на себя, когда ему было всего 9 лет. Это породило у молодого индейца в душе ненависть к ковбоям. Когда началась война, он смог переметнуться на сторону киборгов, и пересадил сознание в модифицированное тело. Теперь, он крошит ковбоев направо и налево, попевая песенки на своём, никому не понятном языке.',
		power: '«Сомкнуть ряды» — подтягивает на свою клетку отстающего союзника, но также притягиевает опережающего.'
	},
	{
		image: '/images/avatars/cyborg-card-1-min.png',
		title: 'Olegator_17',
		description: 'Хакер с ником Olegator_17 знаменит взломами существ, с полностью искусственным мозгом. Никто точно не знает кто он, однако ходят слухи что он из России, а число 17 в никнейме означает ничто иное, как его возраст. Хакая примитивную защиту киборгов, которые принадлежат частным лицам, он направляет их на фронт сопротивления консерваторам-ковбоям. Однажды, с помощью целого взвода таких киборгов, он победил в сражении за округ Краули в одиночку. Война для него как игра в PlayStation.',
		power: '«Хорошая работа, Олег!» — Olegator_17 использует способность любого оппонента на выбор.'
	},				
]

const Accordeon = (props) => {

	const expandRight = useSpring({flexGrow: props.isOpenRight ? "1" : "0.1", config: {duration: 100}})
	const expandLeft = useSpring({flexGrow: props.isOpenRight ? "0.1" : "1", config: {duration: 100}})

  function handleClickLeft() {
  	if (props.isOpenRight) {

	  	props.handleClickLeft()

		setTimeout(function() {
		    scroller.scrollTo('anchor', {
		        duration: 400,
		        delay: 100,
		        smooth: true,
		        offset: 50, 
		    })}, 1)
	}
  }

  function handleClickRight() {
  	if (!props.isOpenRight) {

		props.handleClickRight()

	  	setTimeout(function() {
	  		scroller.scrollTo('anchor', {
		        duration: 400,
		        delay: 200,
		        smooth: true,
		        offset: 50, 
		    })}, 1)
	}  	
  }

	return (
		<div style={{background: "linear-gradient(to right, #f7941e 0%,#f7941e 50%,rgb(92, 192, 208) 50%,rgb(92, 192, 208) 50%,rgb(92, 192, 208) 100%)"}}>
			<div id="accordeon-container" className="position-realtive m-w-container" style={{overflow: "hidden"}}>
				<div>
					<h2 className="text-center text-white d-block px-3">ВЫБЕРИ С КЕМ ИГРАТЬ</h2>
					<div className="accordeon">
						<animated.div className="accordeon-left" id="accordeon-left" onClick={handleClickLeft} style={expandLeft}>
							<animated.div id={props.isOpenRight ? "" : "anchor"} className="display-5 text-white">КОВБОИ</animated.div>
							{!props.isOpenRight ? <Deck cards={cowboys}/> : <div className="arrow arrow-left"></div>}
						</animated.div>
						<animated.div className="accordeon-right" id="accordeon-right" onClick={handleClickRight} style={expandRight}>
							<animated.div id={props.isOpenRight ? "anchor" : ""} className="display-5 text-white">КИБОРГИ</animated.div>
							{props.isOpenRight ? <Deck cards={cyborgs}/> : <div className="arrow arrow-right"></div>}
						</animated.div>
						<Link to="shop" smooth={true} duration={600} style={{position: "absolute", height: "120px", width: "100vw", left: 0, bottom: "0"}} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Accordeon