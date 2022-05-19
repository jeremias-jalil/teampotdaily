import { createContext, useContext, useEffect, useState } from 'react';
import { useStopwatch } from 'react-timer-hook';
import { backgroundColorTimeLimit, colorGalery } from "../utils/constants";

const appContext = createContext()

export function AppContextProvider({ children }) {
    const [teamMembers, setTeamMembers] = useState([])
    const [teamAsistent, setTeamAsistent] = useState([])
    const [dailyList, setDailyList] = useState([])
    const [winner, setWinner] = useState("")
    const [prizeNumber, setPrizeNumber] = useState(0);
    const [spinnData, setSpinnData] = useState([])
    const [cont, setCont] = useState(0)
    const [mustSpin, setMustSpin] = useState(false);
    const [timeLimit, setTimeLimit] = useState(2)
    const [timeLimitStep, setTmeLimitStep] = useState(1);
    const [results, setlResults] = useState(false)
    const [spinnerOn, setSpinnerOn] = useState(false)
    const [pauseFlag, setPauseFlag] = useState(false)
    const [voice, setVoice] = useState({})


    useEffect(() => {
        setVoice(speechSynthesis.getVoices().find(e => e.lang === "es-ES"))
    }, [])

    const {
        seconds,
        minutes,
        isRunning,
        start,
        pause,
        reset,
    } = useStopwatch({ autoStart: false });

    const {
        seconds: secondsTotal,
        minutes: minutesTotal,
        start: startTotal,
        pause: pauseTotal,
        reset: resetTotal,
    } = useStopwatch({ autoStart: false });

    const updateTeamMembers = (list) => {
        setTeamMembers(list)
    }

    const updateTeamAsistent = (data) => {
        reset()
        pause()
        resetTotal()
        pauseTotal()
        const list = data.split('\n').filter((e) => e !== "")
        const formatDataSpinn = list.map(e => {
            var randomColor = colorGalery[Math.floor(Math.random() * 15)]
            return { option: e, style: { backgroundColor: randomColor } }
        })
        setSpinnData(formatDataSpinn)
        setTeamAsistent(list)
        localStorage.setItem("teampot", data)
    }

    const updateDailyList = (list) => {
        setDailyList(list)
    }

    const updateWinner = (name) => {
        let mensaje = new SpeechSynthesisUtterance();
        mensaje.voice = voice;
        mensaje.volume = 1;
        mensaje.rate = 1;
        mensaje.text = name;
        mensaje.pitch = 1;
        speechSynthesis.speak(mensaje)
        setSpinnerOn(false)
        setWinner(name)
        updateTimeLimitStep(1)
    }

    const updateTimeLimit = (time) => {
        setTimeLimit(time)
    }

    const updateMustSpin = (value) => {
        setMustSpin(value)
    }


    const handleSpinClick = () => {
        setSpinnerOn(true)
        pause()
        const newSpinnData = [...spinnData]
        if (cont) {

            const user = newSpinnData.splice(prizeNumber, 1)
            updateDailyList([...dailyList, { name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }])
        }
        const newPrizeNumber = Math.floor(Math.random() * newSpinnData.length)
        setPrizeNumber(newPrizeNumber)
        setMustSpin(true)
        setSpinnData(newSpinnData)
        setCont(cont + 1)
    }

    const updateTimeLimitStep = (value) => {
        setTmeLimitStep(value)
        document.body.style.backgroundColor = backgroundColorTimeLimit[value]
        value > 3 ? document.body.style.backgroundBlendMode = "darken" : document.body.style.backgroundBlendMode = "lighten"
    }

    const getBackgroundColor = () => {
        return backgroundColorTimeLimit[timeLimitStep]
    }

    const finish = () => {
        pause()
        pauseTotal()
        const newSpinnData = [...spinnData]
        const user = newSpinnData.splice(prizeNumber, 1)
        updateDailyList([...dailyList, { name: user[0].option, minutes: minutes, seconds: seconds, timeLimitStep: timeLimitStep }])
        reset()
        pause()
        setWinner("")
        setlResults(true)
    }

    const resetAll = () => {
        setCont(0)
        setSpinnData([])
        setTeamAsistent([])
        setDailyList([])
        resetTotal()
        pauseTotal()
        reset()
        pause()
        setPrizeNumber(null)
        setMustSpin(false)
        setWinner("")
        setlResults(false)
    }

    const providerData = {
        teamMembers,
        teamAsistent,
        dailyList,
        seconds,
        minutes,
        isRunning,
        winner,
        mustSpin,
        prizeNumber,
        spinnData,
        cont,
        timeLimitStep,
        timeLimit,
        secondsTotal,
        minutesTotal,
        results,
        spinnerOn,
        pauseFlag,
        updateTeamMembers,
        updateTeamAsistent,
        updateDailyList,
        updateWinner,
        updateMustSpin,
        start,
        pause,
        reset,
        startTotal,
        pauseTotal,
        resetTotal,
        handleSpinClick,
        updateTimeLimitStep,
        getBackgroundColor,
        updateTimeLimit,
        resetAll,
        setlResults,
        finish,
        setSpinnerOn,
        setPauseFlag
    }

    return (
        <appContext.Provider value={providerData} >
            {children}
        </appContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(appContext)
    if (!context) {
        throw new Error('Error en useContext')
    } else {
        return context
    }

}