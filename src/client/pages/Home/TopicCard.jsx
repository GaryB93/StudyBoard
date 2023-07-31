import React, { useState } from 'react';
import { FaArrowRight, FaArrowLeft, FaTimes, FaCheck } from 'react-icons/fa';
import style from './TopicCard.module.scss';

const TopicCard = ({ topic, setCurrTopic, currTopic, handleDeleteCard, handleStatusChange, handleSave }) => {
  const string = topic.answer;
  const [answer, setAnswer] = useState(string);

  const handleCardSelect = () => {
    setCurrTopic(topic);
  };

  // if card rendered is not current card selected view front
  if (!currTopic || topic.topic != currTopic.topic) {
    return (
      <div className={`${style.front} ${topic.done && style.done}`}>
        <div>
          <button
            aria-label='Mark card done or undone'
            className={style.check}
            onClick={() => {handleStatusChange(topic)}}
            title='Mark done'
          >
            <FaCheck size={18}/>
          </button>
        </div>
        <p>{topic.topic}</p>
        <div>
          <button
            aria-label='Delete flash card'
            className={style.close}
            onClick={() => {handleDeleteCard(topic)}}
            title='Delete'
          >
            <FaTimes size={18}/>
          </button>
          <button
            aria-label='flip card to back'
            onClick={handleCardSelect}
            title='Flip'
          >
            <FaArrowRight size={18}/>
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className={`${style.back} ${topic.done && style.done}`}>
        <textarea
          id='answer'
          name='answer'
          value={answer}
          onChange={(e) => {setAnswer(e.target.value)}} />
        <div>
          <button aria-label='flip card to front' onClick={() => {handleSave(answer)}}>
            <FaArrowLeft size={18}/>
          </button>
        </div>
      </div>
    )
  }
};

export default TopicCard;