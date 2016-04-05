import React, {PropTypes} from 'react';



const GiveUpQuestion = ({createItem, appState}) => {
  const ENTER_KEY = 13;
  const handleSubmit = function(event){
      
  };

  return (
    <div>
      <p>I give up! What is it?</p>
      <input 
          ref={node => {
            this.input = node;
          }}
          type="text" 
          defaultValue="a giraffe" 
        />

      <button 
        onClick={()=>{
          createItem(this.input.value);
        }}>
        Submit
      </button>
    </div>
  );
};

export default GiveUpQuestion;
