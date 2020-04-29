import React from 'react'
import { YMInitializer } from 'react-yandex-metrika';

const YandexMetrika = () => {
	return (
        <YMInitializer accounts={[61624138]} options={{clickmap: true, trackLinks: true, accurateTrackBounce:true, webvisor:true}} version="2" />
	)
}

export default YandexMetrika;