import React, { useState } from 'react';
import Rules from './Rules';

const OpenRulesButton = (props) => {

  const [modalIsOpen, setModal] = useState(false);

  return (
    <>
      {props.rulesButtonIsActive &&
        <button onClick={() => setModal(true)} type="button" className="btn btn-light btn-rules btn-lg position-fixed" href="/"><h3>Правила игры</h3></button>
      }
      <Rules modalIsOpen={modalIsOpen} setModal={setModal} />
    </>
  )
}

export default OpenRulesButton