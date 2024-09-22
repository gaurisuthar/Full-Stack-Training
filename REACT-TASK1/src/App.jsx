import React,{useState} from 'react'
import Greeting from './components/Greeting'
import ProfileCard from './components/ProfileCard'
import StatusMessage from './components/StatusMessage'
import Counter from './components/Counter'
import LikeButton from './components/LikeButton'
import Timer from './components/Timer'
import ColorPicker from './components/ColorPicker'
import TextInput from './components/TextInput'
import ToggleSwitch from './components/ToggleSwitch'
import TodoList from './components/TodoList'

const App = () => {
  const [color, setColor] = useState('#000000'); 
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  const [text, setText] = useState(''); 

  const handleTextChange = (newText) => {
    setText(newText); 
  };

  const [isToggled, setIsToggled] = useState(false); 

  const handleToggle = () => {
    setIsToggled(prevState => !prevState); 
  };
  const todos = [
    'Learn React',
    'Build a Todo App',
    'Practice Coding',
    'Read a Book',
    'Exercise'
  ];
  return (
    <div>
      <Greeting name="Gauri"/>
      <br />
      <ProfileCard name="Gauri" age="21" location="Kumbhalgarh"/>
      <br />
      <StatusMessage status="error"/>
      <br />
      <Counter/>
      <br />
      <LikeButton likeCount={0}/>
      <br />
      <Timer start={0}/>
      <br />
      <ColorPicker onColorChange={handleColorChange}/>
      <br />
      <h1 className="text-4xl font-bold">Controlled vs Uncontrolled Component</h1>
      <TextInput onChange={handleTextChange} /> 
      <p className="mt-4 text-lg">Current Text: {text}</p> 
      <br />
      <h1 className="text-4xl font-bold">Props as Functions</h1>
      <br />
      <ToggleSwitch toggleState={handleToggle} /> 
      <p className="mt-4 text-lg">Toggle State: {isToggled ? 'ON' : 'OFF'}</p>
      <br />
      <TodoList todos={todos} /> 
    </div>
  )
}
export default App