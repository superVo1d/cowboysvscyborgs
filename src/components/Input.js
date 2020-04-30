import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring'

const Input = (props) => {

	const [isFocused, setIsFocused] = useState(false);

	const inputStyle = useSpring({
		borderBottom: isFocused ? "1px solid transparent" : "1px solid #c8cbcf",
		textAlign: (props.align === "center") ? "center" : "left",
		config: { duration: 100 }
	});

	const lineStyle = useSpring({
		opacity: isFocused ? 1 : 0,
		config: { duration: 100 }
	});

	const placeholderStyle = useSpring({
		fontSize: isFocused ? "12px" : "21px",
		marginTop: isFocused ? "0" : "12px",
		transform: (props.align === "center") ? "transalteX(-50%)" : "transalteX(0)",
		right: (props.align === "center") ? 0 : "auto",
		left: (props.align === "center") ? 0 : "auto",
		config: { duration: 100 }
	});

	function onBlur(e) {
		if (e.target.value === "") {
			setIsFocused(false)
		}
	}

	return (
		<>
			<animated.div className="placeholder" style={placeholderStyle}>{props.placeholder}</animated.div>
        	<animated.input value={props.value} onFocus={() => setIsFocused(true)} onBlur={onBlur} onChange={props.handleChange} style={inputStyle} name={props.name} type="text" className="form-control position-relative" placeholder="" autoComplete="off" />
        	<animated.div className="input-line" style={lineStyle}></animated.div>
        </>
	)
}

export default Input;