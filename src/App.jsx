import { useState } from 'react'
import './App.css'
import Tasbeeh from './components/tasbeeh/Tasbeeh'
import Footer from './components/Footer/Footer'
import subahanallah from './assets/sa.mp3'
import alhamdulillah from './assets/ahamdulillah.mp3'
import allahuakbar from './assets/allahuakbar.mp3'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
      const [countNumber, setcountNumber] = useState(0);

      const addNumber = () => {
        const newCountNumber = countNumber + 1;
        if(newCountNumber > 100){
          return setcountNumber(0)
        }
        setcountNumber(newCountNumber);
        if(newCountNumber <= 33){
          new Audio(subahanallah).play()
          toast.success("Subahanallah", {
            theme: "colored"
          });
        }
        else if(newCountNumber > 33 && newCountNumber <= 66 ){
          new Audio(alhamdulillah).play()
          toast.success("Alhamdulillah", {
            theme: "colored"
          });
        }
        else{
          new Audio(allahuakbar).play()
          toast.success("Allahuakbar", {
            theme: "colored"
          });
        }
      }

      const removeNumber = () =>{
        if(countNumber == 0){
          toast.error("you don't remove", {
            theme: "colored"
          });
        }
        else{
          const newRemovedNumber = countNumber - 1;
          setcountNumber(newRemovedNumber)}
      }

      const resetNumber = () => {
        setcountNumber(0)
      }
  return (
    <>
      <div className='flex flex-col'>
      <div className="lg:w-8/12 w-full lg:h-[83vh] h-[95vh] mx-auto flex justify-center items-center bg-[#7887AB] tasbeeh-container">
        <Tasbeeh countNumber={countNumber} addNumber={addNumber} removeNumber={removeNumber} resetNumber={resetNumber}></Tasbeeh>
        <ToastContainer/>
      </div>
      <Footer></Footer>
      </div>
    </>
  )
}

export default App
