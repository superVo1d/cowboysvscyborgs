import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-with-gesture'
import '../deck.css'


// These two are just helpers, they curate spring data, just values that are later being interpolated into css
const to = i => ({ x: 0, y: i * -10, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ rot: 0, scale: 1.2, y: -100, r: i * 25 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

const Deck = (props) => {
  const [currentCard, setCurrentCard] = useState(props.cards.length)

  // The set flags all the cards that are flicked out
  const [gone] = useState(() => new Set())
  // Create a bunch of springs that contain x/y-position, rotation and scale - using the helpers above
  const [items, set] = useSprings(props.cards.length, i => ({ ...to(i), from: from(i) }))
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    // If you flick hard enough it should trigger the card to fly out
    const trigger = velocity > 0.01
    // Direction should either point left or right
    const dir = xDir < 0 ? -1 : 1
    // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    if (!down && trigger) gone.add(index)
    // useSprings.set reconfigures the springs
    set(i => {
      // We're only interested in changing spring-data for the current spring
      if (index !== i) return
      const isGone = gone.has(index)

  	  if (isGone) {
	  	setCurrentCard(state => state - 1);
  	  }

      // When a card is gone it flys out left or right, otherwise it's either dragged to delta, or goes back to zero
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
      // How much the card tilts, flicking it harder makes it rotate faster
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
      // Active cards lift up a bit
      const scale = down ? 1.1 : 1
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === props.cards.length) {
    	setTimeout(() => gone.clear() || set(i => to(i)), 300)
    	setCurrentCard(props.cards.length)
    }
  })
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
  	<div>
  		<div className="position-relative">
               <div className="deck-clue">Просто смахни карту в сторону</div>
		  	<div className="deck">
			  	{items.map(({ x, y, rot, scale }, i) => (
			  		<>
					    <animated.div className="card-container" key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
					      {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
					      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${props.cards[i]['image']})` }} />
					    </animated.div>
				    </>
				))}
			</div>
			    {currentCard &&
				    <div className="card-meta px-3 px-sm-5">
					    <h2 className="card-title text-white">{props.cards[currentCard - 1]['title']}</h2>
              <div className="card-description">
                  <p className="lead text-white">
              	     <span className="font-weight-bold">Способность: </span>{props.cards[currentCard - 1]['power']}
                </p>
                <div id="summary">
                    <p className="card-description lead text-white collapse" id="collapseSummary">
                         <span className="font-weight-bold">Биография: </span>
                         {props.cards[currentCard - 1]['description']}
                    </p>
                    <a className="collapsed" data-toggle="collapse" href="#collapseSummary" aria-expanded="false" aria-controls="collapseSummary" role="button"></a>
                </div>
              </div>
				    </div>
				  }			
		</div>
	</div>
  )
}

export default Deck;
